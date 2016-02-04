var path = require('path');
var webpack = require('webpack');

const SRCDIR = path.resolve(__dirname, 'src');
const DIST = path.resolve(__dirname, 'dist');

const loaders = [{
    test: /\.js$/,
    include: SRCDIR,
    loader: 'babel-loader',
    query: {
        presets: ['es2015']
    }
}];
module.exports = [{
    name: 'client',
    target: 'web',
    context: SRCDIR,
    entry: './index',
    output: {
        path: DIST,
        filename: 'bundle.js'
    },
    module: {
        loaders: loaders
    }
}];

