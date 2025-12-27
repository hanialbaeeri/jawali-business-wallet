<template>
  <button
    :class="cn(
      toggleVariants({ variant, size }),
      pressed ? 'bg-accent text-accent-foreground' : '',
      $attrs.class
    )"
    :pressed="pressed"
    @click="toggle"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const toggleVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-10 px-3',
        sm: 'h-9 px-2.5',
        lg: 'h-11 px-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

interface ToggleProps {
  variant?: 'default' | 'outline'
  size?: 'default' | 'sm' | 'lg'
  pressed?: boolean
}

const props = withDefaults(defineProps<ToggleProps>(), {
  variant: 'default',
  size: 'default',
  pressed: false,
})

const emit = defineEmits<{
  'update:pressed': [value: boolean]
}>()

const pressed = ref(props.pressed)

const toggle = () => {
  pressed.value = !pressed.value
  emit('update:pressed', pressed.value)
}
</script>

