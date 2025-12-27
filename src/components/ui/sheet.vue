<template>
  <Teleport to="body">
    <div v-if="open" class="fixed inset-0 z-50 bg-black/80" @click="close" />
    <div
      v-if="open"
      :class="cn(
        sheetVariants({ side }),
        'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out',
        $attrs.class
      )"
      v-bind="$attrs"
      @click.stop
    >
      <slot />
      <button
        @click="close"
        class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        <X class="h-4 w-4" />
        <span class="sr-only">Close</span>
      </button>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const sheetVariants = cva('', {
  variants: {
    side: {
      top: 'inset-x-0 top-0 border-b',
      bottom: 'inset-x-0 bottom-0 border-t',
      left: 'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
      right: 'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
    },
  },
  defaultVariants: {
    side: 'right',
  },
})

interface SheetProps {
  side?: 'top' | 'bottom' | 'left' | 'right'
  open?: boolean
}

const props = withDefaults(defineProps<SheetProps>(), {
  open: false,
  side: 'right',
})

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const open = ref(props.open)

const close = () => {
  open.value = false
  emit('update:open', false)
}

const openSheet = () => {
  open.value = true
  emit('update:open', true)
}

provide('sheet', { open, close, openSheet })
</script>

