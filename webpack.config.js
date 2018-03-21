const webpack = require('webpack');
const path = require('path');

// const glob = require("glob");
// const components = [];

// Discover all libraries folders
// glob
// .sync('libraries/*')
// .forEach(function (file) {
//     var module = path.basename(file, path.extname(file))
//     components.push(module)
// });

// var entry = {
//     './dist/bundle': './src/test.js',
// }

// components.forEach(component => {
//     entry[`./libraries/${component}/dist/${component}`] = [`./libraries/${component}/src/${component}.js`, `./libraries/${component}/src/index.js`]
// });

module.exports = {
    context: path.resolve(__dirname),
    entry: {
        app: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-bundle.js',
        publicPath: '/dist/',
        pathinfo: true // use false to production
    },
    mode: 'development',
    externals: {
        jquery: 'jQuery'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.vue', '.ts', '.tsx'],
        alias: {
            '@libraries' : path.resolve(__dirname, 'features'),
            '@features' : path.resolve(__dirname, 'libraries'),
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use : {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            }
        ]
    },
};
