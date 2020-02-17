import { client as renderVue } from "@uriannrima/hypernova-vue";

import { createApp } from "./app";

const { app: App } = createApp();

export default renderVue("VueModule", App);
