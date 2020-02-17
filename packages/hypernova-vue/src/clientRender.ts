import Vue, { VueConstructor } from "vue";
import hypernova, { load } from "hypernova";

import { createInstance } from "./helpers";

export const renderVue = (
  name: string,
  Component: VueConstructor<Vue> | Vue
): VueConstructor<Vue> | Vue =>
  hypernova({
    server() {
      console.error("Use hypernova-vue/server to render at the server.");
      return null as any;
    },
    client() {
      const payloads = load(name);
      if (payloads) {
        payloads.forEach(payload => {
          const { node, data: propsData } = payload;
          const componentInstance = createInstance({ Component, propsData });
          componentInstance.$mount(node);
        });
      }

      return Component;
    }
  });
