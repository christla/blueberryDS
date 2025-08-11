<script setup lang="ts">
const props = withDefaults(defineProps<{ modelValue?: string; placeholder?: string; rows?: number; disabled?: boolean; invalid?: boolean }>(), { rows: 4 });
const emit = defineEmits<{ (e: 'update:modelValue', v: string): void }>();
</script>

<template>
  <textarea
    :value="modelValue || ''"
    :rows="rows"
    :placeholder="placeholder"
    :disabled="disabled"
    class="block w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm outline-none transition placeholder:text-muted focus:ring-2 focus:ring-primary/60 disabled:opacity-50"
    :class="invalid ? 'border-destructive focus:ring-destructive/60' : 'border-secondary/60 focus:border-primary'"
    @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
  />
</template>