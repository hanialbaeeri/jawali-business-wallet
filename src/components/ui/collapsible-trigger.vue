<template>
  <div @click="toggle" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const collapsible = inject<{ toggle: () => void }>('collapsible')

const toggle = () => {
  collapsible?.toggle()
}
</script>

