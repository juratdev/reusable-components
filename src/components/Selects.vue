<template>
  <div class="w-64 cursor-pointer">
    <div
      :class="open ? 'border-blue-500  text-blue-500' : ''"
      @click="openDropDown"
      v-click-outside="closeDrop"
      class="flex items-center justify-between px-3 py-2 font-medium transition duration-300 border-2 rounded-md select-none hover:border-blue-500 hover:text-blue-500 bg-gray-light-200"
    >
      <p>{{ selectedText }}</p>
      <div
        class="transition duration-300"
        :class="open ? 'rotate-90' : 'rotate-0'"
      >
        <slot name="suffix" />
      </div>
    </div>
    <Transition name="fade-up" mode="out-in">
      <div
        class="absolute z-10 w-64 p-4 mt-1 bg-white border-2 rounded-md"
        v-if="open"
      >
        <slot name="selects" />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

defineProps({
  label: String,
  selectedText: String,
  options: Array,
});

const open = ref(false);

function openDropDown() {
  open.value = !open.value;
}

function closeDrop() {
  open.value = false;
}
</script>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.3s ease;
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(5%);
}
</style>
