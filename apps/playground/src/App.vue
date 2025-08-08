<script setup lang="ts">
import { ref } from 'vue';
import {
  UiButton,
  UiInput,
  UiCheckbox,
  UiSwitch,
  UiBadge,
  UiSpinner,
  UiAvatar,
  UiTooltip,
  UiIcon,
  UiDropdown,
  UiSelect,
  UiMultiSelect,
  UiAutocomplete,
  UiModal,
  UiToastProvider,
  useToasts,
  UiFormWrapper
} from '@acme/ui';

const text = ref('');
const checked = ref(false);
const toggled = ref(false);
const showModal = ref(false);
const sel = ref<string | number | null>(null);
const multi = ref<Array<string | number>>([]);
const auto = ref<string | null>(null);
const options = Array.from({ length: 10 }).map((_, i) => ({ label: `Option ${i + 1}`, value: i + 1 }));

const { push } = useToasts();

function saveForm() {
  push({ intent: 'success', title: 'Saved', message: 'Your changes have been saved.' });
}
</script>

<template>
  <UiToastProvider>
    <div class="mx-auto max-w-5xl space-y-10 p-6">
      <header class="flex items-center justify-between">
        <h1 class="text-2xl font-bold">Design System Playground</h1>
        <UiButton variant="secondary" @click="() => document.documentElement.classList.toggle('dark')">Toggle Dark</UiButton>
      </header>

      <section class="space-y-4">
        <h2 class="text-xl font-semibold">Atoms</h2>
        <div class="flex flex-wrap items-center gap-3">
          <UiButton>Primary</UiButton>
          <UiButton variant="secondary">Secondary</UiButton>
          <UiButton variant="ghost">Ghost</UiButton>
          <UiButton variant="destructive">Destructive</UiButton>
          <UiButton variant="link">Link</UiButton>
          <UiButton><UiSpinner class="mr-2" />Loading</UiButton>
        </div>
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <UiInput v-model="text" placeholder="Text input" />
          <UiInput v-model="text" type="search" placeholder="Search" />
          <label class="flex items-center gap-2"><UiCheckbox v-model="checked" /> Checkbox</label>
          <div class="flex items-center gap-2"><UiSwitch v-model="toggled" /> Toggle</div>
          <UiBadge>Neutral</UiBadge>
          <UiBadge intent="success">Success</UiBadge>
          <UiBadge intent="warning">Warning</UiBadge>
          <UiBadge intent="error">Error</UiBadge>
          <UiAvatar name="Jane Doe" />
          <UiTooltip text="Helpful info"><UiIcon name="InformationCircleIcon" /></UiTooltip>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-xl font-semibold">Molecules</h2>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <UiSelect v-model="sel" :options="options" placeholder="Select one" />
          <UiMultiSelect v-model="multi" :options="options" placeholder="Select many" />
          <UiAutocomplete v-model="auto" :options="options.map(o => ({ label: o.label, value: String(o.value) }))" />
          <UiDropdown>
            <template #button>
              <UiButton variant="secondary">Open menu</UiButton>
            </template>
            <button class="block w-full px-3 py-2 text-left hover:bg-secondary/50">Action 1</button>
            <button class="block w-full px-3 py-2 text-left hover:bg-secondary/50">Action 2</button>
          </UiDropdown>
        </div>
      </section>

      <section class="space-y-4">
        <h2 class="text-xl font-semibold">Organisms</h2>
        <UiFormWrapper :validate="() => true" @submit="saveForm">
          <template #default="{ submitting }">
            <div class="flex items-center gap-2">
              <UiInput v-model="text" placeholder="Your name" class="max-w-xs" />
              <UiButton type="submit">Save</UiButton>
              <UiButton variant="secondary" type="reset">Reset</UiButton>
              <UiButton variant="ghost" @click="showModal = true">Open Modal</UiButton>
              <span v-if="submitting"><UiSpinner /></span>
            </div>
          </template>
        </UiFormWrapper>

        <UiModal v-model="showModal" title="Example Modal">
          <p class="text-sm">This is a modal with content and actions.</p>
          <template #footer>
            <UiButton variant="secondary" @click="showModal = false">Cancel</UiButton>
            <UiButton @click="() => { showModal = false; push({ intent: 'info', message: 'Confirmed!' }); }">Confirm</UiButton>
          </template>
        </UiModal>
      </section>
    </div>
  </UiToastProvider>
</template>