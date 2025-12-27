<template>
  <div
    :class="cn(
      toastVariants({ variant }),
      'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all',
      $attrs.class
    )"
    v-bind="$attrs"
  >
    <div class="grid gap-1">
      <slot name="title" />
      <slot name="description" />
    </div>
    <slot name="action" />
    <button
      @click="$emit('close')"
      class="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2"
    >
      <X class="h-4 w-4" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const toastVariants = cva('', {
  variants: {
    variant: {
      default: 'border bg-background text-foreground',
      destructive: 'destructive group border-destructive bg-destructive text-destructive-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

interface ToastProps {
  variant?: 'default' | 'destructive'
  open?: boolean
}

withDefaults(defineProps<ToastProps>(), {
  variant: 'default',
  open: true,
})

defineEmits<{
  close: []
}>()

export type ToastActionElement = any
</script>

