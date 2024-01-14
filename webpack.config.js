const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports={
  mode: 'development',
    entry: "./index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve("dist"),
      publicPath: "/",
    },
    devServer: {
      static: './dist',
      compress: true,
      port:3000
    },
    module: {
        rules:[
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: "babel-loader"
          },
          {
            test: /\.html$/,
            use: "html-loader"
          },
          {
            test: /\.scss$/,
            use:[
              "style-loader",
              "css-loader",
              "sass-loader"
            ],
          },
        ], 
      },
      plugins: [
        new HTMLWebpackPlugin({
          template: "index.html"
        })
       ]
    
}