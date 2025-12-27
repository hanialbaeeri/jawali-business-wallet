<template>
  <div @click="handleClick" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { inject, getCurrentInstance } from 'vue'

const dropdownMenu = inject<{ openMenu: (el: HTMLElement) => void }>('dropdownMenu')

const handleClick = (e: MouseEvent) => {
  const el = e.currentTarget as HTMLElement
  dropdownMenu?.openMenu(el)
}
</script>

