<template>
  <div>
    <div
      v-for="toast in toasts"
      :key="toast.id"
      :class="cn(
        'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all',
        toast.variant === 'destructive' ? 'destructive group border-destructive bg-destructive text-destructive-foreground' : 'border bg-background text-foreground',
        $attrs.class
      )"
    >
      <div class="grid gap-1">
        <div v-if="toast.title" class="text-sm font-semibold">{{ toast.title }}</div>
        <div v-if="toast.description" class="text-sm opacity-90">{{ toast.description }}</div>
      </div>
      <button
        @click="dismiss(toast.id)"
        class="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2"
      >
        <X class="h-4 w-4" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'
import { X } from 'lucide-vue-next'

const { toasts, dismiss } = useToast()
</script>

