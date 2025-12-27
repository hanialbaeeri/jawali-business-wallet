<template>
  <div :class="cn('relative flex w-full touch-none select-none items-center', $attrs.class)" v-bind="$attrs">
    <div class="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <div class="absolute h-full bg-primary" :style="{ width: `${(modelValue || 0)}%` }" />
    </div>
    <div
      class="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      :style="{ left: `${(modelValue || 0)}%` }"
    />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'

withDefaults(defineProps<{ modelValue?: number }>(), {
  modelValue: 0,
})

defineEmits<{
  'update:modelValue': [value: number]
}>()
</script>

