import { server as renderVue } from "@uriannrima/hypernova-vue";

import { createApp } from "./app";

export const hypernova = (context?: any) => {
  const { app: App } = createApp();

  return renderVue("VueModule", App);
};

export default (context?: any) => {
  const { app: App } = createApp();

  return App;
};
