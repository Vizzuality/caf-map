module.exports = {

  entry:  './index.html',
  output: {
    path:     'builds',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test:   /\.scss/, loaders: ['style', 'css', 'sass'] },
      { test:   /\.html/, loader: 'html' },
      { test:   /\.(png|gif|jpe?g|svg)$/i, loader: 'url' }
    ]
  }
};
