<template>
  <div class="p-5">
    <form class="flex items-center gap-2">
      <label class="text-lg text-black">{{ label }}</label>
      <div
        class="border-2 max-w-64 flex items-center bg-gray-50 focus-within:border-blue-500 rounded px-2.5"
      >
        <slot name="prefix" />
        <input
          :type="type"
          :disabled="disabled"
          :placeholder="placeholder"
          :class="disabled ? 'cursor-not-allowed' : ''"
          @update:modelValue="passInputValue"
          @input="$emit('update:modelValue', $event.target.value)"
          class="outline-none bg-gray-50 py-3 px-2.5 focus:border-blue-500 transition duration-300"
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
  modelValue: String | Number,
  placeholder: String,
  type: String,
  disabled: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

function passInputValue(value) {
  emit("update:modelValue", value);
}
</script>
