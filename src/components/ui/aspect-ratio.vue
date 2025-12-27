<template>
  <div :class="cn('relative w-full', $attrs.class)" :style="{ paddingBottom: `${(1 / (ratio || 1)) * 100}%` }" v-bind="$attrs">
    <div class="absolute inset-0">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'

withDefaults(defineProps<{ ratio?: number }>(), {
  ratio: 1,
})
</script>

