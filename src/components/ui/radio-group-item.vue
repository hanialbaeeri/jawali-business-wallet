<template>
  <button
    :class="cn(
      'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      checked ? 'bg-primary' : '',
      $attrs.class
    )"
    :checked="checked"
    @click="toggle"
    v-bind="$attrs"
  >
    <Circle v-if="checked" class="h-2.5 w-2.5 fill-current text-current" />
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Circle } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

interface Props {
  value: string
  checked?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  checked: false,
})

const emit = defineEmits<{
  'update:checked': [value: boolean]
  'change': [value: string]
}>()

const checked = ref(props.checked)

const toggle = () => {
  checked.value = !checked.value
  emit('update:checked', checked.value)
  emit('change', props.value)
}
</script>

