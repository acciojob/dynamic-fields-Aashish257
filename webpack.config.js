const path = require("path");
const HtmlWebpackPlugin= require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',

    output: {
        path: path.join(__dirname,"/dist"),
        filename: "index_bundle.js",
    },
    module:{
        rules: [
            {
                test: /\.js$|\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],

    // devServer config added so the dev server is reachable from remote/devcontainer environments
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        disableHostCheck: true,
        hot: true,
        open: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },

    resolve: {
        extensions: ['.js', '.jsx'],
    }
};
