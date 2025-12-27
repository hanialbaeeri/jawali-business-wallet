<template>
  <div
    :class="cn(
      sheetVariants({ side }),
      'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out',
      $attrs.class
    )"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cva, type VariantProps } from 'class-variance-authority'
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

withDefaults(defineProps<VariantProps<typeof sheetVariants>>(), {
  side: 'right',
})
</script>

