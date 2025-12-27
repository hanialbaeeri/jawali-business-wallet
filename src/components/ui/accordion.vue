<template>
  <div v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'

const openItems = ref<string[]>([])

const toggleItem = (value: string) => {
  const index = openItems.value.indexOf(value)
  if (index > -1) {
    openItems.value.splice(index, 1)
  } else {
    openItems.value.push(value)
  }
}

provide('accordion', { openItems, toggleItem })
</script>

