<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem, Transition } from '@headlessui/vue';
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton class="inline-flex w-full justify-center rounded-md bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground shadow-sm hover:bg-secondary/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60">
        <slot name="button">Menu</slot>
      </MenuButton>
    </div>
    <Transition
      enter="transition ease-out duration-100"
      enter-from="transform opacity-0 scale-95"
      enter-to="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leave-from="transform opacity-100 scale-100"
      leave-to="transform opacity-0 scale-95"
    >
      <MenuItems class="absolute right-0 z-50 mt-2 w-56 origin-top-right divide-y divide-secondary/60 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-slate-800">
        <div class="px-1 py-1">
          <slot />
        </div>
      </MenuItems>
    </Transition>
  </Menu>
</template>