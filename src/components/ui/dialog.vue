<template>
  <Teleport to="body">
    <div v-if="open" class="fixed inset-0 z-50 bg-black/80" @click="close" />
    <div
      v-if="open"
      :class="cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg',
        $attrs.class
      )"
      v-bind="$attrs"
      @click.stop
    >
      <slot />
      <button
        @click="close"
        class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        <X class="h-4 w-4" />
        <span class="sr-only">Close</span>
      </button>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import { X } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

interface Props {
  open?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  open: false,
})

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const open = ref(props.open)

const close = () => {
  open.value = false
  emit('update:open', false)
}

const openDialog = () => {
  open.value = true
  emit('update:open', true)
}

provide('dialog', { open, close, openDialog })
</script>

