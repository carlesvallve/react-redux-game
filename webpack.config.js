var webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './vr-demo/main.js'], // './app/main.js'

  output: {
      path: './build',
      filename: 'bundle.js'
  },

  devServer: {
      inline: true,
      contentBase: './vr-demo',
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
