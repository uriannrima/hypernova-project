const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  // Loaders
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  optimization: {
    usedExports: true
  }
};
