const webpack = require('webpack');
const path = require('path');

const glob = require("glob");
const libraries = [];
const features = [];
const entry = {
    app: './src/index.js',
};
// Discover all libraries folders
glob
.sync('libraries/*')
.forEach(function (file) {
    var module = path.basename(file, path.extname(file))
    libraries.push(module)
});

glob
.sync('features/*')
.forEach(function (file) {
    var module = path.basename(file, path.extname(file))
    features.push(module)
});


libraries.forEach(library => {
    entry[`./libraries/${library}`] = [`./libraries/${library}/src/index.js`]
});

features.forEach(features => {
    entry[`./features/${features}`] = [`./features/${features}/src/index.js`]
});
console.log(path.resolve(__dirname, 'features'));

module.exports = {
    context: path.resolve(__dirname),
    entry: entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-bundle.js',
        publicPath: '/dist/',
        pathinfo: true // use false to production
    },
    mode: 'development',
    // externals: {
    //     jquery: 'jQuery'
    // },
    resolve: {
        extensions: ['.js', '.jsx', '.vue', '.ts', '.tsx'],
        alias: {
            '@libraries' : path.resolve(__dirname, 'libraries'),
            '@features' : path.resolve(__dirname, 'features'),
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
