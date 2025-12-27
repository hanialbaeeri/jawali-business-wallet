<template>
  <PaginationLink aria-label="Go to next page" size="default" class="gap-1 pr-2.5" v-bind="$attrs">
    <span>Next</span>
    <ChevronRight class="h-4 w-4" />
  </PaginationLink>
</template>

<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import PaginationLink from './pagination-link.vue'
</script>

