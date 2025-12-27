<template>
  <div v-if="open" class="fixed inset-0 z-50" @click="close" />
  <div v-if="open" :class="cn('z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md', contentClass)" :style="contentStyle">
    <slot name="content" />
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  contentClass?: string
  align?: 'start' | 'end' | 'center'
}

const props = withDefaults(defineProps<Props>(), {
  align: 'start',
})

const open = ref(false)
const contentStyle = ref({})

const openMenu = (triggerElement: HTMLElement) => {
  const rect = triggerElement.getBoundingClientRect()
  contentStyle.value = {
    position: 'fixed',
    top: `${rect.bottom + 4}px`,
    right: props.align === 'start' ? `${window.innerWidth - rect.right}px` : undefined,
    left: props.align === 'end' ? `${rect.left}px` : undefined,
  }
  open.value = true
}

const close = () => {
  open.value = false
}

provide('dropdownMenu', { open, openMenu, close })
</script>

