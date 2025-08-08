<script setup lang="ts">
const props = defineProps<{ modelValue?: string | number | null; value: string | number; name?: string; disabled?: boolean }>();
const emit = defineEmits<{ (e: 'update:modelValue', v: string | number): void }>();
</script>

<template>
  <label class="inline-flex items-center gap-2">
    <input
      type="radio"
      :name="name"
      :checked="modelValue === value"
      :value="value"
      :disabled="disabled"
      class="h-4 w-4 text-primary focus:ring-2 focus:ring-primary/60"
      @change="emit('update:modelValue', value)"
    />
    <slot />
  </label>
</template>