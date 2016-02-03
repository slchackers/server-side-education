var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './src/main.js',
  output: { path: path.join(__dirname,'build'), filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: path.join(__dirname,'src'),
        loader: 'babel'
      }
    ]
  },
};
