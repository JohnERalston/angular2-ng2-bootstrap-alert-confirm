var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var helpers = (function(){
    return {
        root: root
    }

    function root(args) {
        var path = require('path');
        var _root = path.resolve(__dirname, '.');
        args = Array.prototype.slice.call(arguments, 0);
        var res = path.join.apply(path, [_root].concat(args));
        return res;
    }
})();


module.exports = {
    devServer: {
        historyApiFallback: {
            rewrites: [
                { from: /\/.*/, to: '/index.html'}
            ]
        }
    },

    entry: {
        'polyfills': './app/polyfills.ts',
        'vendor': './app/vendor.ts',
        'app': './app/main.ts'
    },
    output: {
        path: helpers.root('dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: "tslint"
            }
        ],
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.css$/,
                exclude: helpers.root('app'),
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.css$/,
                include: helpers.root('app'),
                loader: 'raw-loader'
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[ext]'
            }
        ]
    },
    tslint: {
        emitErrors: true,
        failOnHint: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: helpers.root(),
            verbose: true, 
            dry: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            cachebust: new Date().getTime(),
            template: './index.html.template',
            filename: './index.html',
            hash: true,
            inject: false
        })
    ]
};
