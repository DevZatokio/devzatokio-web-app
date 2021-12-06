const { resolve, join } = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/main.js",
  output: {
    publicPath: "/",
    path: resolve("./", "dist"),
    filename: "app.[hashfull].js",
  },
  resolve: {
    extensions: [".js", ".vue", ".json", ".scss"],
    alias: {
      '@': 'src'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(js|jsx)?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(html)?$/,
        loader: "html-loader",
      },
      {
        test: /\.(s[ac]ss|css)?$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new FaviconsWebpackPlugin({
      logo: './src/assets/favicon.png', // svg works too!
      mode: 'webapp', // optional can be 'webapp', 'light' or 'auto' - 'auto' by default
      devMode: 'webapp', // optional can be 'webapp' or 'light' - 'light' by default 
      favicons: {
        appName: 'dev-zatokio',
        appDescription: 'DevZatokio Porfolio',
        developerName: 'Camilo Orellana Loyola',
        developerURL: null, // prevent retrieving from the nearest package.json
        background: '#ddd',
        theme_color: '#333',
        icons: {
          coast: false,
          yandex: false
        }
      }
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CleanWebpackPlugin(),
  ],
};
