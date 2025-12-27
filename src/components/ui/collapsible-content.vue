<template>
  <div v-if="open" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'

const collapsible = inject<{ open: boolean }>('collapsible')

const open = computed(() => collapsible?.open || false)
</script>

