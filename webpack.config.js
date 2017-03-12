var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: "./src/js/app.js",
    output: {
        filename: "./app.min.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
            }
        }]
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};
