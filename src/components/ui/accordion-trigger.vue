<template>
  <button
    :class="cn('flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline', isOpen && '[&>svg]:rotate-180', $attrs.class)"
    @click="toggle"
    v-bind="$attrs"
  >
    <slot />
    <ChevronDown class="h-4 w-4 shrink-0 transition-transform duration-200" />
  </button>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import { ChevronDown } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

interface Props {
  value: string
}

const props = defineProps<Props>()

const accordion = inject<{ openItems: string[]; toggleItem: (value: string) => void }>('accordion')

const isOpen = computed(() => accordion?.openItems.includes(props.value) || false)

const toggle = () => {
  accordion?.toggleItem(props.value)
}
</script>

