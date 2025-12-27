<template>
  <div>
    <div @click="toggle" :class="cn('flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', $attrs.class)" v-bind="$attrs">
      <slot name="value" />
      <ChevronDown class="h-4 w-4 opacity-50" />
    </div>
    <Teleport to="body">
      <div
        v-if="open"
        :class="cn('relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md', $attrs.class)"
        :style="contentStyle"
        v-bind="$attrs"
        @click.stop
      >
        <slot />
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const open = ref(false)
const contentStyle = ref({})

const toggle = (e: MouseEvent) => {
  const el = e.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  contentStyle.value = {
    position: 'fixed',
    top: `${rect.bottom + 4}px`,
    left: `${rect.left}px`,
  }
  open.value = !open.value
}

provide('select', { open, toggle })
</script>

