import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import VClickOutside from "./directives/VClickOutside";

const app = createApp(App);

app.directive("click-outside", VClickOutside);
app.mount("#app");
