const path = require('path');
const webpack = require('webpack');

const config = {
    // entry: {
    //     vendor: [
    //         'babel-polyfill',
    //         'react',
    //         'react-dom',
    //         'prop-types',
    //         'axios',
    //         'lodash.debounce',
    //         'lodash.pickby',
    //     ],
    //     app: ['./lib/renderers/dom.js'],
    // },
    entry: './lib/renderers/client.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        // filename: '[name].js',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    // plugins: [
    //     new webpack.optimize.CommonsChunkPlugin({
    //         name: 'vendor',
    //     }),
    // ],
};

module.exports = config;
