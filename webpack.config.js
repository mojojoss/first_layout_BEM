const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './main'),
    entry: {
        app: './main.js'
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].bundle.js',
        publicPath: '/public'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './main')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: { presets: ['es2015'] }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};