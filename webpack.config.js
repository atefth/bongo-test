const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: true,
            sourceMap: true,
            // importLoaders: 1,
            localIdentName: "[name]--[local]--[hash:base64:8]"
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [require('autoprefixer')]
          }
        }
        ]
      }
    ]
  },
  entry: './public/index.js',
  output: {
    filename: './public/index.pack.js',
    path: path.resolve(__dirname)
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "index.html"
    })
  ]
};
