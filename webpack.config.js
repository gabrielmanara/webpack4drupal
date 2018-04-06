const webpack = require('webpack');
const path = require('path');
//var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const glob = require("glob");
const libraries = [];
const pages = [];
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
.sync('src/vue/pages/*')
.forEach(function (file) {
    var module = path.basename(file, path.extname(file))
    pages.push(module)
});


libraries.forEach(library => {
    entry[`./libraries/${library}`] = [`./libraries/${library}/src/index.js`]
});

pages.forEach(page => {
    entry[`./pages/${page}`] = [`./src/vue/pages/${page}/index.js`]
});

let plugins = [];

plugins.push(new FriendlyErrorsWebpackPlugin());
//plugins.push(new LodashModuleReplacementPlugin());

//plugins.push(new BundleAnalyzerPlugin());
plugins.push(new CleanWebpackPlugin(['dist']));
//plugins.push(new webpack.NamedModulesPlugin());
//plugins.push(new webpack.HotModuleReplacementPlugin());
//plugins.push(new webpack.SourceMapDevToolPlugin());
// plugins.push(new webpack.optimize.AggressiveSplittingPlugin({
//     minSize: 10000,
//     maxSize: 30000,
// }));

module.exports = {
    context: path.resolve(__dirname),
    entry: entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-bundle.js',
        publicPath: '/dist/',
        pathinfo: true // use false to production
    },
    devServer: {
        contentBase: './',
        hot: true
    },
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',
    externals: {
        jquery: 'jQuery'
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendor",
              chunks: "initial",
            },
          },
        },
    },
    resolve: {
        extensions: ['.js', '.jsx', '.vue', '.ts', '.tsx', '.json'],
        alias: {
            '@libraries' : path.resolve(__dirname, 'libraries'),
            '@components' : path.resolve(__dirname, 'src/vue/components'),
            '@features' : path.resolve(__dirname, 'features'),
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, 'src'),
        }
    },
    plugins,
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use : {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: false
                    }
                }
            }
        ]
    },
    node: {
        // prevent webpack from injecting useless setImmediate polyfill because Vue
        // source contains it (although only uses it if it's native).
        setImmediate: false,
        // prevent webpack from injecting mocks to Node native modules
        // that does not make sense for the client
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    }
};
