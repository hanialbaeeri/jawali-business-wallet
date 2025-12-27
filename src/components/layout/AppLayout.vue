<template>
  <div class="min-h-screen flex flex-col bg-background">
    <Header />
    <main class="flex-1 p-8">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue'
</script>

