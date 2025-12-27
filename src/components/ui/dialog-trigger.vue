<template>
  <div @click="openDialog" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const dialog = inject<{ openDialog: () => void }>('dialog')

const openDialog = () => {
  dialog?.openDialog()
}
</script>

