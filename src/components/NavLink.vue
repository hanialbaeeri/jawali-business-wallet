<template>
  <RouterLink
    :to="to"
    :class="cn(className, isActive && activeClassName, isPending && pendingClassName)"
    v-bind="$attrs"
  >
    <slot />
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { cn } from '@/lib/utils'

interface Props {
  to: string
  className?: string
  activeClassName?: string
  pendingClassName?: string
}

const props = withDefaults(defineProps<Props>(), {
  className: '',
  activeClassName: '',
  pendingClassName: '',
})

const route = useRoute()
const isActive = computed(() => route.path === props.to)
const isPending = computed(() => false)
</script>

