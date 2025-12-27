<template>
  <nav role="navigation" aria-label="pagination" :class="cn('mx-auto flex w-full justify-center', $attrs.class)" v-bind="$attrs">
    <slot />
  </nav>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
</script>

