<script setup lang="ts">
const props = withDefaults(defineProps<{ allowed: boolean; mode?: 'hide' | 'disable' }>(), { mode: 'hide' });
</script>

<template>
  <template v-if="props.allowed">
    <slot />
  </template>
  <template v-else>
    <span v-if="props.mode === 'disable'" aria-disabled="true" class="pointer-events-none opacity-50">
      <slot />
    </span>
  </template>
</template>