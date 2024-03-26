<template>
  <div>
    <form>
      <label
        for="countries"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Select an option</label
      >
      <select
        id="countries"
        class="bg-blue-50 border-2 outline-none focus-within:border-blue-500 rounded px-2.5 py-3"
      >
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select>
    </form>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  label: String,
  selectedText: String,
  selectShow: Boolean,
});
</script>

<style scoped></style>
