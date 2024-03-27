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
        <div
          v-for="(item, index) in options"
          :key="index"
          class="hover:text-blue-500 transition duration-300 last:border-b-0 pb-2 last:pb-0 border-b-2"
        >
          <p @click="updateValue(item.option, item.id)">{{ item.option }}</p>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";

defineProps({
  label: String,
  selectedText: String,
});

const options = [
  { option: "Olma", id: 1 },
  { option: "Anor", id: 2 },
  { option: "Nok", id: 3 },
  { option: "Shaftoli", id: 4 },
  { option: "Uzum", id: 5 },
  { option: "Banan", id: 6 },
];

let open = ref(false);

function openDropDown() {
  open.value = !open.value;
}

function closeDrop() {
  open.value = false;
}
let emit = defineEmits(["value"]);

function updateValue(item, index) {
  open.value = false;
  emit("value", [item, index]);
}
</script>

<style scoped>
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.5s ease;
}

.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(10%);
}
</style>
