<template>
  <div>
    <div @click="toggle" v-bind="$attrs">
      <slot name="trigger" />
    </div>
    <Teleport to="body">
      <div
        v-if="open"
        :class="cn(
          'z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none',
          $attrs.class
        )"
        :style="popoverStyle"
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
import { cn } from '@/lib/utils'

const open = ref(false)
const popoverStyle = ref({})

const toggle = (e: MouseEvent) => {
  const el = e.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  popoverStyle.value = {
    position: 'fixed',
    top: `${rect.bottom + 4}px`,
    left: `${rect.left}px`,
  }
  open.value = !open.value
}

provide('popover', { open, toggle })
</script>

