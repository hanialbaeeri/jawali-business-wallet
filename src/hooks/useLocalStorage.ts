import { ref, watch } from 'vue'
import { useStorage } from '@vueuse/core'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const storage = useStorage(key, initialValue)
  const storedValue = ref(storage.value)

  watch(storage, (newValue) => {
    storedValue.value = newValue
  })

  const setValue = (value: T | ((val: T) => T)) => {
    const valueToStore = typeof value === 'function' ? (value as (val: T) => T)(storedValue.value) : value
    storage.value = valueToStore
    storedValue.value = valueToStore
  }

  const removeValue = () => {
    storage.value = initialValue
    storedValue.value = initialValue
  }

  return [storedValue, setValue, removeValue] as const
}
