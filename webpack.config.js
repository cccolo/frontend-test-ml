const HtmlWebPackPlugin = require("html-webpack-plugin");
require("babel-polyfill");

module.exports = {
    entry: ["babel-polyfill", "./src/index.js"],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /(\.scss$|\.css$)/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })],
    devServer: {
        port: 3000,
        open: true,
        proxy: {
            "/api": "http://localhost:5000"
        }
    }
};
