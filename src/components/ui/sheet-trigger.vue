<template>
  <div @click="openSheet" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const sheet = inject<{ openSheet: () => void }>('sheet')

const openSheet = () => {
  sheet?.openSheet()
}
</script>

