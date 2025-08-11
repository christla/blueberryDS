<script setup lang="ts">
import { tv } from 'tailwind-variants';
import { cn } from '../utils/cn';
import type { Size, Variant } from '../types';

const props = withDefaults(defineProps<{
  variant?: Variant;
  size?: Size;
  block?: boolean;
  as?: 'button' | 'a';
  href?: string;
  disabled?: boolean;
}>(), {
  variant: 'primary',
  size: 'md',
  block: false,
  as: 'button',
  disabled: false
});

const emit = defineEmits<{ (e: 'click', ev: MouseEvent): void }>();

const button = tv({
  base: 'inline-flex items-center justify-center select-none whitespace-nowrap rounded-md font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
  variants: {
    variant: {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      ghost: 'bg-transparent hover:bg-secondary/50 text-fg',
      destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      link: 'bg-transparent underline-offset-4 hover:underline text-primary'
    },
    size: {
      xs: 'h-7 px-2 text-xs',
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-sm',
      lg: 'h-11 px-6 text-base'
    },
    block: {
      true: 'w-full',
      false: ''
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }
});

function onClick(ev: MouseEvent) {
  if (props.disabled) return;
  emit('click', ev);
}
</script>

<template>
  <component
    :is="as"
    :href="as === 'a' ? href : undefined"
    :disabled="as === 'button' ? disabled : undefined"
    :class="cn(button({ variant, size, block }))"
    @click="onClick"
  >
    <slot />
  </component>
</template>

<style scoped>
/**** Colors resolved via Tailwind theme using CSS variables ****/
</style>