<script setup lang="ts">
import { ref } from 'vue';
import { useFloating, offset, flip, shift, arrow, autoUpdate } from '@floating-ui/vue';

const props = withDefaults(defineProps<{ text: string; placement?: any }>(), { placement: 'top' });
const reference = ref<HTMLElement | null>(null);
const floating = ref<HTMLElement | null>(null);
const arrowEl = ref<HTMLElement | null>(null);

const { floatingStyles, middlewareData } = useFloating(reference, floating, {
  placement: props.placement,
  middleware: [offset(8), flip(), shift({ padding: 8 }), arrow({ element: arrowEl })],
  whileElementsMounted: autoUpdate
});
</script>

<template>
  <span ref="reference" class="inline-flex">
    <slot />
  </span>
  <div
    ref="floating"
    v-show="props.text"
    :style="floatingStyles as any"
    class="z-50 rounded-md bg-fg px-2 py-1 text-xs text-white shadow"
    role="tooltip"
  >
    {{ props.text }}
    <div
      ref="arrowEl"
      class="absolute h-2 w-2 rotate-45 bg-fg"
      :style="{
        left: middlewareData.arrow?.x != null ? `${middlewareData.arrow.x}px` : '',
        top: middlewareData.arrow?.y != null ? `${middlewareData.arrow.y}px` : ''
      }"
    />
  </div>
</template>