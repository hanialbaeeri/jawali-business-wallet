<template>
  <div :class="cn('relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground', $attrs.class)" v-bind="$attrs" @click="$emit('click')">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
defineEmits<{ click: [] }>()
</script>

