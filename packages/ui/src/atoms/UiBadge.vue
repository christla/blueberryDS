<script setup lang="ts">
import type { Intent, Size } from '../types';
import { cn } from '../utils/cn';

const props = withDefaults(defineProps<{ intent?: Intent; size?: Size }>(), { intent: 'neutral', size: 'sm' });
</script>

<template>
  <span
    :class="cn(
      'inline-flex items-center rounded-full border px-2 py-0.5 font-medium',
      size === 'xs' ? 'text-[10px]' : size === 'sm' ? 'text-xs' : 'text-sm',
      intent === 'success' && 'bg-green-100 text-green-800 border-green-200',
      intent === 'warning' && 'bg-yellow-100 text-yellow-800 border-yellow-200',
      intent === 'error' && 'bg-red-100 text-red-800 border-red-200',
      intent === 'info' && 'bg-sky-100 text-sky-800 border-sky-200',
      intent === 'neutral' && 'bg-secondary text-secondary-foreground border-secondary/60'
    )"
  >
    <slot />
  </span>
</template>