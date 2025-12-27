<template>
  <div :class="cn('inline-flex items-center justify-center rounded-md', $attrs.class)" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
</script>

