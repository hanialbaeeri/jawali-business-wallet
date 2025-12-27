<template>
  <div
    :class="cn('overflow-hidden text-sm transition-all', isOpen ? 'animate-accordion-down' : 'animate-accordion-up', $attrs.class)"
    v-bind="$attrs"
  >
    <div :class="cn('pb-4 pt-0', $attrs.class)">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import { cn } from '@/lib/utils'

interface Props {
  value: string
}

const props = defineProps<Props>()

const accordion = inject<{ openItems: string[] }>('accordion')

const isOpen = computed(() => accordion?.openItems.includes(props.value) || false)
</script>

