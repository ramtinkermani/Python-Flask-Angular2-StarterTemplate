/**
 * Created by ramtinkermani on 8/1/16.
 */

var webpack = require("webpack");

module.exports = {
    entry: './app/main.ts',
    output: {
        path: './static/scripts/',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test:/\.ts$/,
                loader: 'ts'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                loaders: 'style!css'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    }
};

