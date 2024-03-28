<template>
  <div class="flex">
    <!-- Inputs -->
    <form class="flex flex-col" @submit.prevent="submitForm">
      <h2 class="px-5 pt-5 text-2xl font-medium">Form inputs:</h2>
      <div>
        <Input
          v-model="user.fullname"
          label="Username"
          type="text"
          placeholder="Username"
        />
        <Input
          v-model="user.email"
          label="Email"
          type="email"
          placeholder="Enter email"
        />
        <Input
          v-model="user.password"
          label="Password"
          :type="typePass"
          placeholder="Enter password"
        >
          <template #suffix>
            <i
              @click="showPassword"
              :class="showPasswordIcon ? 'fa-eye' : 'fa-eye-slash'"
              class="w-4 cursor-pointer fa-regular"
            ></i>
          </template>
        </Input>
        <Input label="Search" type="text" placeholder="Search..." variant="">
          <template #suffix>
            <i class="text-gray-500 fa-solid fa-magnifying-glass"></i>
          </template>
        </Input>
        <Input label="Search icon-right" type="text" placeholder="Search...">
          <template #prefix>
            <i class="text-gray-500 fa-solid fa-magnifying-glass"></i>
          </template>
        </Input>
        <Input
          label="Disabled"
          type="text"
          disabled="true"
          placeholder="Disabled"
        />
      </div>
      <Button title="Submit" variant="medium" class="flex items-center px-5" />
    </form>
    <!-- Buttons -->
    <div class="flex flex-col">
      <h2 class="px-5 pt-5 text-2xl font-medium">Buttons:</h2>
      <div>
        <Button title="Large" variant="large" />
        <Button title="Medium" variant="medium" class="flex items-center">
          <template #suffix>
            <i class="fa-solid fa-arrow-right ps-2"></i> </template
        ></Button>
        <div class="flex items-center gap-1">
          <Button
            title="Previous Page"
            variant="small"
            styles="text-white bg-blue-500"
          >
            <template #prefix>
              <i class="fa-solid fa-chevron-left pe-2"></i>
            </template>
          </Button>
          <Button
            title="Next Page"
            variant="small"
            styles="text-white bg-blue-500"
          >
            <template #suffix>
              <i class="fa-solid fa-arrow-right ps-2"></i> </template
          ></Button>
        </div>
      </div>
    </div>
    <!-- Selects -->
    <form class="flex flex-col ms-14">
      <h2 class="px-5 py-5 text-2xl font-medium">Form Selects:</h2>
      <div>
        <Select
          :selectedText="mainText"
          @value="upDateValue"
          :options="options"
        >
          <template #suffix>
            <i class="fa-solid fa-angle-right"></i>
          </template>
          <template #selects>
            <ul
              v-for="(item, index) in options"
              :key="index"
              :class="{ 'bg-gray-200/70': mainText === item.option }"
              class="font-medium transition duration-300 border-b-2 hover:text-black text-black/80 last:border-b-0"
            >
              <li @click="upDateValue(item.option, item.id)" class="p-1">
                {{ item.option }}
              </li>
            </ul></template
          >
        </Select>
      </div>
    </form>
  </div>
</template>

<script setup>
import Input from "./components/FormInput.vue";
import Button from "./components/Buttons.vue";
import Select from "./components/Selects.vue";
import { ref, reactive } from "vue";

const emit = defineEmits(["submit"]);

function submitForm() {
  console.log("submit", user);
  emit("submit", user);
}

const user = reactive({
  fullname: "",
  email: "",
  password: "",
});

const options = [
  { option: "Olma", id: 1 },
  { option: "Anor", id: 2 },
  { option: "Nok", id: 3 },
  { option: "Uzum", id: 4 },
  { option: "Banan", id: 5 },
];

const mainText = ref("All");

function upDateValue(value, index) {
  mainText.value = value;
}

const showPasswordIcon = ref(false);
const typePass = ref("password");

const showPassword = () => {
  if (typePass.value === "password") {
    typePass.value = "text";
  } else {
    typePass.value = "password";
  }
  if (showPasswordIcon.value === false) {
    showPasswordIcon.value = true;
  } else {
    showPasswordIcon.value = false;
  }
};
</script>

<style scoped></style>
