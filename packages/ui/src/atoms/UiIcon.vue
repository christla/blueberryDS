<script setup lang="ts">
import * as Icons from '@heroicons/vue/24/solid';

const props = defineProps<{ name: keyof typeof Icons; size?: number; class?: string }>();
</script>

<template>
  <component :is="Icons[name]" :class="props.class" :style="{ width: `${size || 20}px`, height: `${size || 20}px` }" />
</template>