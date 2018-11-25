const express = require('express');
const app = express();

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackHotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {}));
app.use(webpackHotMiddleware(compiler));

app.listen(4000, () => console.log('Running on 4000'));