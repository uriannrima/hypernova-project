declare module "hypernova" {
  export function serialize(name: string, contents: string, data: any): string;
  export function load(name: string): any[];
  export default function hypernova(options: {
    server: () => (props: any) => string | Promise<string>;
    client: Function;
  }): any;
}

declare module "hypernova/server" {
  import express from "express";

  interface HypernovaContext<MetadataType = any> {
    name: string;
    token: string;
    props: { name: string };
    metadata: MetadataType;
    statusCode: number;
    duration: number;
    html: string;
    returnMeta: object;
  }

  interface HypernovaOptions {
    bodyParser?: { limit: number };
    devMode?: boolean;
    getComponent(
      componentName: string,
      context: HypernovaContext
    ): Function | object | string | null | void;
    getCPUs?(): number;
    host?: string;
    logger?: object;
    loggerInstance?: object;
    port?: number;
    endpoint?: string;
    processJobsConcurrently?: boolean;
    listenArgs?: null;
    createApplication?(): express.Express;
  }

  export default function(options: HypernovaOptions): void;
}
