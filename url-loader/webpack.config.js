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
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 900000
          }
        }
      }
    ]
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin({

    }),
    new HtmlWebpackPlugin({
        title: 'Webpack-dev-server',
        template: path.resolve(__dirname, "index.html")
    })
  ]
};
