const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: "./index.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[contenthash].bundle.js",
    clean: true,
  },
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "index.ejs", inject: true }),
    new BundleAnalyzerPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: {
      app: {
        name: "chrome",
      },
    },
    devMiddleware: {
      writeToDisk: true,
    },
    port: 3000,
    server: "https",
  },
};
