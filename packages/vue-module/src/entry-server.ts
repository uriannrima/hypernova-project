import { server as renderVue } from "@uriannrima/hypernova-vue";
import App from "./app/App.vue";

export default () => {
  return renderVue("VueModule", App);
};
