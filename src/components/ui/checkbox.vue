<template>
  <button
    :class="cn(
      'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      checked ? 'bg-primary text-primary-foreground' : '',
      $attrs.class
    )"
    :checked="checked"
    @click="toggle"
    v-bind="$attrs"
  >
    <Check v-if="checked" class="h-4 w-4" />
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Check } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

interface Props {
  checked?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  checked: false,
})

const emit = defineEmits<{
  'update:checked': [value: boolean]
}>()

const checked = ref(props.checked)

const toggle = () => {
  checked.value = !checked.value
  emit('update:checked', checked.value)
}
</script>

