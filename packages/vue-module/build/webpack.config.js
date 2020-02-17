const path = require("path");
const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");

const baseConfig = require("./webpack.base.config");

const output = {
  path: path.join(__dirname, "..", "dist"),
  filename: "[name].js"
};

const server = merge(baseConfig, {
  entry: {
    "entry-server": path.join(__dirname, "..", "src", "entry-server.ts")
  },
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
  })
});

const client = merge(baseConfig, {
  entry: {
    "entry-client": path.join(__dirname, "..", "src", "entry-client.ts")
  },
  target: "web",
  devtool: "source-map",
  output: {
    ...output
  },
  optimization: {
    splitChunks: {
      name: "manifest",
      minChunks: Infinity
    }
  }
});

const index = merge(baseConfig, {
  entry: {
    index: path.join(__dirname, "..", "src", "index.ts")
  },
  target: "node",
  devtool: "source-map",
  output: {
    ...output,
    libraryTarget: "commonjs2"
  }
});

module.exports = [
  index
  //server,
  //client
];
