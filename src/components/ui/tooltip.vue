<template>
  <div class="relative inline-block">
    <div @mouseenter="show" @mouseleave="hide">
      <slot name="trigger" />
    </div>
    <Teleport to="body">
      <div
        v-if="isOpen"
        :class="cn('z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md', $attrs.class)"
        :style="tooltipStyle"
        v-bind="$attrs"
      >
        <slot />
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import { cn } from '@/lib/utils'

const isOpen = ref(false)
const tooltipStyle = ref({})

const show = (e: MouseEvent) => {
  const el = e.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  tooltipStyle.value = {
    position: 'fixed',
    top: `${rect.top - 8}px`,
    right: `${window.innerWidth - rect.right}px`,
  }
  isOpen.value = true
}

const hide = () => {
  isOpen.value = false
}

provide('tooltip', { isOpen, show, hide })
</script>

