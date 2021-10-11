const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "index.es5.js",
    path: __dirname + "/",
    libraryTarget: "commonjs2",
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ""],
  },
	mode: "none",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  target: "node",
  externals: [nodeExternals()],
};
