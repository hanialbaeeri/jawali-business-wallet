<template>
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <RouterView />
  </TooltipProvider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Toaster from '@/components/ui/toaster.vue'
import Sonner from '@/components/ui/sonner.vue'
import TooltipProvider from '@/components/ui/tooltip-provider.vue'
</script>

