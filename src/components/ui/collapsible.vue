<template>
  <div v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'

const open = ref(false)

const toggle = () => {
  open.value = !open.value
}

provide('collapsible', { open, toggle })
</script>

