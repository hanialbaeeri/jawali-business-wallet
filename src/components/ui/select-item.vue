<template>
  <div
    :class="cn('relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground', $attrs.class)"
    v-bind="$attrs"
    @click="$emit('select')"
  >
    <Check v-if="selected" class="absolute left-2 h-4 w-4" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

withDefaults(defineProps<{ selected?: boolean }>(), {
  selected: false,
})

defineEmits<{ select: [] }>()
</script>

