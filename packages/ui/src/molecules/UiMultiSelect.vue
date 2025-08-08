<script setup lang="ts">
import { ref, computed } from 'vue';
import { Combobox, ComboboxInput, ComboboxOptions, ComboboxOption, Transition } from '@headlessui/vue';
import UiBadge from '../atoms/UiBadge.vue';

interface Option { label: string; value: string | number }

const props = defineProps<{ modelValue?: Array<string | number>; options: Option[]; placeholder?: string }>();
const emit = defineEmits<{ (e: 'update:modelValue', v: Array<string | number>): void }>();

const query = ref('');
const filtered = computed(() =>
  query.value === ''
    ? props.options
    : props.options.filter(o => o.label.toLowerCase().includes(query.value.toLowerCase()))
);
</script>

<template>
  <Combobox :model-value="modelValue || []" multiple @update:modelValue="(v) => emit('update:modelValue', v as any)">
    <div class="relative">
      <div class="flex flex-wrap gap-1 rounded-md border border-secondary/60 px-2 py-1">
        <template v-for="val in (modelValue || [])" :key="val">
          <UiBadge size="xs">{{ props.options.find(o => o.value === val)?.label || val }}</UiBadge>
        </template>
        <ComboboxInput class="flex-1 border-0 bg-transparent py-1 text-sm outline-none" :placeholder="placeholder || 'Select...'" @change="(e: any) => (query = e.target.value)" />
      </div>
      <Transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ComboboxOptions class="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm dark:bg-slate-800">
          <ComboboxOption v-for="opt in filtered" :key="opt.value" :value="opt.value" as="template">
            <li class="relative cursor-default select-none py-2 pl-3 pr-4 ui-active:bg-primary/10 ui-active:text-primary">
              <span class="block truncate">{{ opt.label }}</span>
            </li>
          </ComboboxOption>
        </ComboboxOptions>
      </Transition>
    </div>
  </Combobox>
</template>