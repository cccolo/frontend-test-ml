const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
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
                test: /\.(png|jpg|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader?name=[name].[ext]',
                        options: {}
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            favicon: './src/assets/img/favicon.ico'
        })],
    devServer: {
        port: 3000,
        open: true,
        proxy: {
            "/api": "http://localhost:5000"
        }
    }
};
