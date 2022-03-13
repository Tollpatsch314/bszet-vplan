const path = require("path");

module.exports = {
  entry: "./src/main.ts",
  mode: "production",
  target: "webworker",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "worker.js",
    path: path.resolve(__dirname, "dist"),
  },
};
