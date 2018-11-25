const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "./index.html"),
    filename: "./index.html"
});
const CleanWebpackPlugin = require('clean-webpack-plugin');
const cleanWebpackPlugin = new CleanWebpackPlugin(
    path.resolve(__dirname, 'public/bundle.js')
);

module.exports = {
    entry: [
        '@babel/polyfill', // emulates an ES2015 environment
        path.resolve(__dirname, './src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
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
    plugins: [
        cleanWebpackPlugin,
        htmlWebpackPlugin
    ]
}