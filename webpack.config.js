const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [ path.resolve(__dirname, './src/index.js') ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.[hash].js'
    },
    resolve: {
        extensions: [ '.js', '.jsx', '.css', '.scss' ]
    },
    mode: "development",
    module: {
        rules: [
            {
                loader: 'babel-loader',
                // query: {
                //     presets: ['react', 'es2015', 'stage-0']
                // },
                test: /\.js?$/,
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: 'client/index.html'
    //     }),
    //     new ExtractTextPlugin('main.css')
    // ]
}