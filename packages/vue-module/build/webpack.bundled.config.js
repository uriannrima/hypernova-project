const path = require("path");
const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");

const baseConfig = require("./webpack.base.config");

const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");

const output = {
  path: path.join(__dirname, "..", "dist", "bundled")
};

const server = merge(baseConfig, {
  entry: path.join(__dirname, "..", "src", "entry-server.ts"),
  target: "node",
  devtool: "source-map",
  output: {
    ...output,
    libraryTarget: "commonjs2"
  },
  externals: nodeExternals({
    // do not externalize dependencies that need to be processed by webpack.
    // you can add more file types here e.g. raw *.vue files
    // you should also whitelist deps that modifies `global` (e.g. polyfills)
    // whitelist: /\.css$/
  }),
  plugins: [new VueSSRServerPlugin()]
});

const client = merge(baseConfig, {
  entry: path.join(__dirname, "..", "src", "entry-client.ts"),
  output: {
    ...output
  },
  devtool: "source-map",
  plugins: [new VueSSRClientPlugin()],
  optimization: {
    splitChunks: {
      name: "manifest",
      minChunks: Infinity
    }
  }
});

module.exports = [server, client];
