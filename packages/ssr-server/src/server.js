const express = require("express");
const { createRenderer, createBundleRenderer } = require("vue-server-renderer");

const vueModule = require("@uriannrima/vue-module");

const app = express();

const renderer = createRenderer();

app.get("/", (req, res) => {
  const context = { url: req.url };
  // No need to pass an app here because it is auto-created by
  // executing the bundle. Now our server is decoupled from our Vue app!
  vueModule
    .hypernova(context)(renderer)()
    .then(rendered => {
      res.send(rendered);
    });
});

app.get("/bundled", (req, res) => {
  const context = { url: req.url };
  // No need to pass an app here because it is auto-created by
  // executing the bundle. Now our server is decoupled from our Vue app!
  vueModule
    .getBundleRendererConfiguration()
    .then(({ clientManifest, serverBundle }) => {
      console.log({ clientManifest, serverBundle });
      const bundleRenderer = createBundleRenderer(serverBundle, {
        clientManifest
      });
      vueModule
        .hypernova(context)(bundleRenderer)()
        .then(rendered => {
          res.send(rendered);
        });
    });
});

app.listen(5051, () => {
  console.log("Listening...");
});
