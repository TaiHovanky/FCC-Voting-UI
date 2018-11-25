const express = require('express');
const expressGraphQL = require('express-graphql');
const app = express();

const schema = require('./schema');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const webpackHotMiddleware = require('webpack-hot-middleware');

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {}));
app.use(webpackHotMiddleware(compiler));

// /graphql entry point
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(4000, () => console.log('Running on 4000'));