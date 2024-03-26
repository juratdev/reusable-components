<template>
  <div class="p-5">
    <form class="flex items-center gap-2">
      <label class="text-black text-lg">{{ label }}</label>
      <div
        class="border-2 max-w-64 flex items-center bg-blue-50 focus-within:border-blue-500 rounded px-2.5"
      >
        <slot name="prefix" />
        <input
          :type="type"
          :disabled="disabled"
          :placeholder="placeholder"
          :rows="rows"
          :class="disabled ? 'cursor-not-allowed' : ''"
          class="outline-none bg-blue-50 py-3 px-2.5 focus:border-blue-500 transition duration-300"
        />
        <slot name="suffix" />
      </div>
    </form>
  </div>
</template>
<script setup>
import { defineProps } from "vue";

defineProps({
  label: String,
  placeholder: String,
  type: String,
  required: true,
  disabled: Boolean,
});
</script>
