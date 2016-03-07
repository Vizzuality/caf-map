var ExtractPlugin = require('extract-text-webpack-plugin');

var plugins = [
  new ExtractPlugin('bundle.css'), //To extract CSS
];

module.exports = {

  entry:  './app',
  output: {
    path:     'builds',
    filename: 'bundle.js',
    publicPath: 'builds/'
  },

  plugins: plugins,

  module: {
    loaders: [
      { test:   /\.scss/, loader: ExtractPlugin.extract('style', 'css!sass') },
      { test:   /\.html/, loader: 'html' },
      { test:   /\.(png|gif|jpe?g|svg)$/i, loader: 'url' }
    ]
  }
};
