<template>
  <div @click="toggle" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const popover = inject<{ toggle: (e: MouseEvent) => void }>('popover')

const toggle = (e: MouseEvent) => {
  popover?.toggle(e)
}
</script>

