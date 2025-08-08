<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue?: boolean;
  disabled?: boolean;
}>(), {});

const emit = defineEmits<{ (e: 'update:modelValue', value: boolean): void }>();
</script>

<template>
  <label class="inline-flex items-center gap-2">
    <input
      type="checkbox"
      :checked="!!modelValue"
      :disabled="disabled"
      class="h-4 w-4 rounded border-secondary/60 text-primary focus:ring-2 focus:ring-primary/60"
      @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <slot />
  </label>
</template>