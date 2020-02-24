const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    home: path.resolve(__dirname, "src/js/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },
  devServer: {
    hot: true,
    open: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin({

    }),
    new HtmlWebpackPlugin({
        title: 'Webpack-dev-server'
    })
  ]
};
