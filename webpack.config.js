var ExtractPlugin = require('extract-text-webpack-plugin');

var plugins = [
  new ExtractPlugin('main.css'), //To extract CSS
];

module.exports = {

  entry:  './app',
  output: {
    path:     'public',
    filename: 'main.js',
    publicPath: 'public/'
  },

  plugins: plugins,

  module: {
    loaders: [
      { test: /\.scss/, loader: ExtractPlugin.extract('style', 'css!sass') },
      { test: /\.html/, loader: 'html' },
      { test: /\.(png|gif|jpe?g|svg)$/i, loader: 'url' }
    ]
  }
};
