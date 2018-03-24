const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");

// Constant with our paths
// Not really used for now
const paths = {
    dist: path.resolve(__dirname, 'dist'),
};

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
        ]
    },
    devServer: {
        inline: true,
        hot:true,
        contentBase: 'dist'
    },
    // plugins: [
    //   new HtmlWebPackPlugin({
    //     template: path.join(paths.dist, 'index.html')
    //   })
    // ]

    // plugins: [
    //   new HtmlWebPackPlugin({
    //     template: "./dist/index.html",
    //     filename: "./index.html"
    //   })
    // ]
};

module.exports = config;
