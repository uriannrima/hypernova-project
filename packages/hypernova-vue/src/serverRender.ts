import Vue, { VueConstructor } from "vue";
import hypernova, { serialize } from "hypernova";
import { Renderer, BundleRenderer } from "vue-server-renderer";

import { createInstance } from "./helpers";

export const renderVue = (
  name: string,
  Component: VueConstructor<Vue> | Vue
) => (
  renderer:
    | Renderer
    | BundleRenderer
    | { renderToString(vm: Vue, context?: object): Promise<string> }
): Promise<string> =>
  hypernova({
    server() {
      return async (propsData: any = {}): Promise<string> => {
        const componentInstance = createInstance({ Component, propsData });
        const contents = await renderer.renderToString(componentInstance);
        return serialize(name, contents, propsData);
      };
    },
    client() {
      console.error("Use hypernova-vue/client to render at the client.");
      return null;
    }
  });
