<script setup lang="ts">
import { computed } from 'vue';
import { Listbox, ListboxButton, ListboxOptions, ListboxOption, Transition } from '@headlessui/vue';

interface Option { label: string; value: string | number }

const props = defineProps<{ modelValue?: string | number | null; options: Option[]; placeholder?: string }>();
const emit = defineEmits<{ (e: 'update:modelValue', v: string | number | null): void }>();

const selected = computed(() => props.options.find(o => o.value === props.modelValue));
</script>

<template>
  <Listbox :model-value="modelValue" @update:modelValue="(v) => emit('update:modelValue', v)">
    <div class="relative">
      <ListboxButton class="relative w-full cursor-default rounded-md border border-secondary/60 bg-transparent py-2 pl-3 pr-10 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 sm:text-sm">
        <span class="block truncate">{{ selected?.label ?? (placeholder || 'Select...') }}</span>
      </ListboxButton>
      <Transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm dark:bg-slate-800">
          <ListboxOption v-for="opt in options" :key="opt.value" :value="opt.value" as="template">
            <li class="relative cursor-default select-none py-2 pl-10 pr-4 ui-active:bg-primary/10 ui-active:text-primary">
              <span class="block truncate">{{ opt.label }}</span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </Transition>
    </div>
  </Listbox>
</template>