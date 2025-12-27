<template>
  <Toaster :theme="theme" class="toaster group" />
</template>

<script setup lang="ts">
import { Toaster } from 'vue-sonner'

withDefaults(defineProps<{ theme?: 'light' | 'dark' | 'system' }>(), {
  theme: 'system',
})
</script>

