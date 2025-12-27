<template>
  <li role="presentation" aria-hidden="true" :class="cn('[&>svg]:size-3.5', $attrs.class)" v-bind="$attrs">
    <slot>
      <ChevronRight />
    </slot>
  </li>
</template>

<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import { cn } from '@/lib/utils'
</script>

