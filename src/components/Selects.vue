<template>
  <div class="cursor-pointer w-64">
    <div
      :class="open ? 'border-blue-500  text-blue-500' : ''"
      @click="openDropDown"
      v-click-outside="closeDrop"
      class="flex hover:border-blue-500 hover:text-blue-500 duration-300 transition items-center justify-between bg-gray-light-200 border-2 select-none rounded-md py-2 px-3"
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
        class="z-10 w-64 p-4 bg-white mt-1 border-2 rounded-md absolute"
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

let open = ref(false);

function openDropDown() {
  open.value = !open.value;
}

function closeDrop() {
  open.value = false;
}
// let emit = defineEmits(["value"]);

// function updateValue(item, index) {
//   open.value = false;
//   emit("value", [item, index]);
// }
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
