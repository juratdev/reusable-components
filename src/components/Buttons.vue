<template>
  <div class="pt-5">
    <div
      :class="[variants[variant], styles]"
      class="flex items-center cursor-pointer justify-center transition rounded-md"
    >
      <slot name="prefix" />
      <button class="font-medium">
        {{ title }}
      </button>
      <slot name="suffix" />
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

defineProps({
  variant: String,
  title: String,
  styles: String,
});

const variants = {
  large:
    "bg-red-500 border-2 border-red-400 text-white hover:bg-red-800 py-2 px-8 transition duration-300 text-2xl",
  medium:
    "bg-blue-500 text-white hover:bg-blue-800 transition duration-300 px-4 py-2",
  default:
    "text-white bg-blue-600 hover:bg-blue-800 font-medium rounded text-base outline-none py-2.5 px-5",
  small:
    "text-white bg-blue-600 hover:bg-blue-800 font-medium rounded text-xs rounded-full outline-none py-2 px-2.5",
};
</script>
