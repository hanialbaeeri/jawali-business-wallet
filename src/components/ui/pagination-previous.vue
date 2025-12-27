<template>
  <PaginationLink aria-label="Go to previous page" size="default" class="gap-1 pl-2.5" v-bind="$attrs">
    <ChevronLeft class="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
</template>

<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next'
import PaginationLink from './pagination-link.vue'
</script>

