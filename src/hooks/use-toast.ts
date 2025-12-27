import { ref, onMounted, onUnmounted } from 'vue'

type ToastActionElement = any
type ToastProps = {
  id?: string
  title?: string
  description?: string
  action?: ToastActionElement
  variant?: 'default' | 'destructive'
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: string
  description?: string
  action?: ToastActionElement
}

type Toast = Omit<ToasterToast, 'id'>

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()
const listeners: Array<(state: { toasts: ToasterToast[] }) => void> = []
let memoryState: { toasts: ToasterToast[] } = { toasts: [] }

function dispatch(action: {
  type: 'ADD_TOAST' | 'UPDATE_TOAST' | 'DISMISS_TOAST' | 'REMOVE_TOAST'
  toast?: ToasterToast
  toastId?: string
}) {
  switch (action.type) {
    case 'ADD_TOAST':
      memoryState = {
        ...memoryState,
        toasts: [action.toast!, ...memoryState.toasts].slice(0, TOAST_LIMIT),
      }
      break
    case 'UPDATE_TOAST':
      memoryState = {
        ...memoryState,
        toasts: memoryState.toasts.map((t) =>
          t.id === action.toast!.id ? { ...t, ...action.toast } : t
        ),
      }
      break
    case 'DISMISS_TOAST': {
      const { toastId } = action
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        memoryState.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }
      memoryState = {
        ...memoryState,
        toasts: memoryState.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
      break
    }
    case 'REMOVE_TOAST':
      if (action.toastId === undefined) {
        memoryState = {
          ...memoryState,
          toasts: [],
        }
      } else {
        memoryState = {
          ...memoryState,
          toasts: memoryState.toasts.filter((t) => t.id !== action.toastId),
        }
      }
      break
  }
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: 'REMOVE_TOAST',
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: 'UPDATE_TOAST',
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: 'DISMISS_TOAST', toastId: id })

  dispatch({
    type: 'ADD_TOAST',
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open: boolean) => {
        if (!open) dismiss()
      },
    } as ToasterToast,
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const state = ref<{ toasts: ToasterToast[] }>(memoryState)

  const updateState = (newState: { toasts: ToasterToast[] }) => {
    state.value = newState
  }

  onMounted(() => {
    listeners.push(updateState)
  })

  onUnmounted(() => {
    const index = listeners.indexOf(updateState)
    if (index > -1) {
      listeners.splice(index, 1)
    }
  })

  return {
    ...state.value,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: 'DISMISS_TOAST', toastId }),
  }
}

export { useToast, toast }
