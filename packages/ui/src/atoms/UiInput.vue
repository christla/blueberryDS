<script setup lang="ts">
import type { Size } from '../types';
import { cn } from '../utils/cn';

const props = withDefaults(defineProps<{
  modelValue?: string | number;
  type?: 'text' | 'number' | 'password' | 'email' | 'date' | 'search';
  size?: Size;
  placeholder?: string;
  disabled?: boolean;
  invalid?: boolean;
}>(), {
  type: 'text',
  size: 'md',
  placeholder: ''
});

const emit = defineEmits<{ (e: 'update:modelValue', value: string | number | undefined): void }>();

function onInput(ev: Event) {
  const target = ev.target as HTMLInputElement;
  emit('update:modelValue', props.type === 'number' ? Number(target.value) : target.value);
}
</script>

<template>
  <input
    :type="type"
    :value="modelValue as any"
    :placeholder="placeholder"
    :disabled="disabled"
    :class="cn(
      'block w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm outline-none transition placeholder:text-muted focus:ring-2 focus:ring-primary/60 disabled:opacity-50',
      invalid ? 'border-destructive focus:ring-destructive/60' : 'border-secondary/60 focus:border-primary'
    )"
    @input="onInput"
  />
</template>