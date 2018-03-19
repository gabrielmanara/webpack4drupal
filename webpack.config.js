const webpack = require('webpack');

const glob = require("glob");
const path = require('path');
const components = [];

// Discover all libraries folders
glob
.sync('libraries/*')
.forEach(function (file) {
    var module = path.basename(file, path.extname(file))
    components.push(module)
});

var entry = {
    './dist/bundle': './src/test.js',
}

components.forEach(component => {
    entry[`./libraries/${component}/dist/${component}`] = [`./libraries/${component}/src/${component}.js`, `./libraries/${component}/src/index.js`]
});

module.exports = {
    entry: entry,
    output: {
        path: path.resolve(__dirname, './'),
        filename: '[name].js'
    }
};
