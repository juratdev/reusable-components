<template>
  <div class="flex">
    <!-- Inputs -->
    <form class="flex flex-col" @submit.prevent="submitForm">
      <h2 class="pt-5 px-5 text-2xl font-medium">Form inputs:</h2>
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
              class="fa-regular cursor-pointer w-4"
            ></i>
          </template>
        </Input>
        <Input label="Search" type="text" placeholder="Search..." variant="">
          <template #suffix>
            <i class="fa-solid fa-magnifying-glass text-gray-500"></i>
          </template>
        </Input>
        <Input label="Search icon-right" type="text" placeholder="Search...">
          <template #prefix>
            <i class="fa-solid fa-magnifying-glass text-gray-500"></i>
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
    <div class="ms-14 flex flex-col">
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
              :class="{ 'bg-gray-200': mainText === item.option }"
              class="hover:text-blue-500 transition duration-300 last:border-b-0 border-b-2"
            >
              <li @click="upDateValue(item.option, item.id)" class="p-1">
                {{ item.option }}
              </li>
            </ul></template
          >
        </Select>
      </div>
    </div>
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
  { option: "Shaftoli", id: 4 },
  { option: "Uzum", id: 5 },
  { option: "Banan", id: 6 },
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
