<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(defineProps<{ validate?: () => Promise<boolean> | boolean; disabled?: boolean }>(), {});
const emit = defineEmits<{ (e: 'submit'): void; (e: 'invalid'): void; (e: 'reset'): void }>();

const isSubmitting = ref(false);

async function onSubmit(ev: Event) {
  ev.preventDefault();
  if (props.disabled || isSubmitting.value) return;
  isSubmitting.value = true;
  try {
    const ok = (await props.validate?.()) ?? true;
    if (ok) emit('submit');
    else emit('invalid');
  } finally {
    isSubmitting.value = false;
  }
}
function onReset() {
  emit('reset');
}
</script>

<template>
  <form @submit="onSubmit" @reset="onReset" novalidate>
    <fieldset :disabled="disabled || isSubmitting">
      <slot :submitting="isSubmitting" />
    </fieldset>
  </form>
</template>