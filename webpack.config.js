"use strict";

var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var glob = require("glob");
var framerDirectoryRoot = glob.sync("./framerPrototype/*.framer")[0];
console.log(process.env.myLayersVar);

module.exports = {
  entry: path.join(__dirname, "src", "app.js"),
  output: {
    path: path.resolve("dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader"
      }
    ]
  },
  resolve: {
    modules: ["src", "node_modules"]
  },
  plugins: [
    new webpack.ProvidePlugin({
      "window.Framer": "Framer",
      "window.Animation": "Animation",
      "window.Layer": "Layer",
      "window.ScrollComponent": "ScrollComponent",
      "window.FlowComponent": "FlowComponent",
      "window.SliderComponent": "SliderComponent",
      "window.Gradient": "Gradient",
      "window.Color": "Color",
      "window.MIDIComponent": "MIDIComponent",
      "window.BackgroundLayer": "BackgroundLayer",
      "window.PageComponent": "PageComponent",
      "window.RangeSliderComponent": "RangeSliderComponent",
      "window.SVGLayer": "SVGLayer",
      "window.TextLayer": "TextLayer",
      "window.VideoLayer": "VideoLayer",
      "window.myLayers": "myLayers"
    }),
    new HtmlWebpackPlugin({
      template: "index.html",
      title: "Framer Prototype",
      myLayersVar: process.env.myLayersVar
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(framerDirectoryRoot, "framer"),
        to: path.resolve("dist", "framer"),
        toType: "dir"
      },
      {
        from: path.join(framerDirectoryRoot, "imported"),
        to: path.resolve("dist", "imported"),
        toType: "dir"
      },
      {
        from: path.join("src", "device.js"),
        to: path.resolve("dist", "device.js"),
        toType: "file"
      }
    ])
  ],
  devServer: {
    contentBase: "dist",
    compress: true,
    port: 8888,
    inline: true,
    watchContentBase: true
  }
};
