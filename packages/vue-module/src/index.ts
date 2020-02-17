export { default as client } from "./entry-client";
export { default as server, hypernova } from "./entry-server";

export async function getBundleRendererConfiguration() {
  const serverBundle = await import(
    "../dist/bundled/vue-ssr-server-bundle.json"
  );
  const clientManifest = await import(
    "../dist/bundled/vue-ssr-client-manifest.json"
  );

  return {
    serverBundle,
    clientManifest
  };
}
