const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports={
  mode: 'development',
    entry: "./src/core/main.js",
    
    output: {
      filename: "bundle.js",
      path: path.resolve("dist"),
      publicPath: "/",
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
            test: /\.css$/,
            use: ["style-loader",
            "css-loader"]
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
       ],
       resolve: {
        extensions: [ '.js', '.jsx', '.json', '.scss' ]
       
      }
    
}