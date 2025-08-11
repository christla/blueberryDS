<script setup lang="ts">
const props = withDefaults(defineProps<{ src?: string; alt?: string; name?: string; size?: number }>(), { size: 32 });

function initials(name?: string) {
  if (!name) return '';
  const parts = name.trim().split(/\s+/);
  return parts.slice(0, 2).map(p => p[0]?.toUpperCase() ?? '').join('');
}
</script>

<template>
  <span
    class="inline-flex items-center justify-center rounded-full bg-secondary text-secondary-foreground"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <img v-if="src" :src="src" :alt="alt || name || 'avatar'" class="h-full w-full rounded-full object-cover" />
    <span v-else class="text-xs font-semibold">{{ initials(name) }}</span>
  </span>
</template>