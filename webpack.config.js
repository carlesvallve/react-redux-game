var webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './app/main.js'],

  output: {
      path: './splitex/path/to',
      filename: 'bundle.js'
  },

  devServer: {
      inline: true,
      contentBase: './app',
      port: 1234
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  }
};
