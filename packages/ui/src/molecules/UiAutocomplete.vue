<script setup lang="ts">
import { ref, computed } from 'vue';
import { Combobox, ComboboxInput, ComboboxOptions, ComboboxOption, Transition } from '@headlessui/vue';

interface Option { label: string; value: string }

const props = defineProps<{ modelValue?: string | null; options: Option[]; placeholder?: string }>();
const emit = defineEmits<{ (e: 'update:modelValue', v: string | null): void }>();

const query = ref('');
const filtered = computed(() =>
  query.value === '' ? props.options : props.options.filter(o => o.label.toLowerCase().includes(query.value.toLowerCase()))
);
</script>

<template>
  <Combobox :model-value="modelValue || null" @update:modelValue="(v) => emit('update:modelValue', v as any)">
    <div class="relative">
      <ComboboxInput class="w-full rounded-md border border-secondary/60 bg-transparent px-3 py-2 text-sm outline-none" :placeholder="placeholder || 'Type to search...'" @change="(e: any) => (query = e.target.value)" />
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