<script setup lang="ts">
const props = withDefaults(defineProps<{ loading: boolean; error?: string | null }>(), {});
</script>

<template>
  <div>
    <div v-if="loading" class="p-6 text-center">
      <slot name="loading">Loading…</slot>
    </div>
    <div v-else-if="error" class="p-4 text-sm text-red-600">
      <slot name="error">{{ error }}</slot>
    </div>
    <div v-else>
      <slot />
    </div>
  </div>
</template>