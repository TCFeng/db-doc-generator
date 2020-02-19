const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: "less-loader",
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    resolve: {
        alias: {
            '~~components': path.resolve(__dirname, 'src/components/'),
            '~~atoms': path.resolve(__dirname, 'src/components/atoms')
        },
        extensions: [
            '.js',
            '.jsx'
        ],
        modules: [
            path.resolve(__dirname, 'src/'),
            path.resolve(__dirname, 'node_modules/'),
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: "./index.html"
        })
    ],
    devServer: {
        compress: true,
        port: 8080
    }
}