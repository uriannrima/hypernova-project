import express from "express";
import hypernova from "hypernova/server";
import path from "path";
import { createRenderer } from "vue-server-renderer";

import { server as renderVueModule } from "@uriannrima/vue-module";

const vueRenderer = createRenderer();

const ModuleMap: {
  [key: string]: (context?: any) => string | Promise<string>;
} = {
  VueModule: async (context?: any) => {
    return await renderVueModule()(vueRenderer);
  }
};

hypernova({
  getComponent: (componentName, context) => {
    return ModuleMap[componentName](context);
  },
  createApplication: function() {
    const app = express();

    app.get("/health", function(_, res) {
      return res.status(200).send("OK");
    });

    app.use(express.static(path.join(process.cwd(), "dist")));

    return app;
  },
  port: 3030
});
