<template>
  <ul :class="cn('flex flex-row items-center gap-1', $attrs.class)" v-bind="$attrs">
    <slot />
  </ul>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
</script>

