const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
            '~~components': path.resolve(__dirname, 'src/app/components/'),
            '~~atoms': path.resolve(__dirname, 'src/app/components/atoms'),
            '~~styles': path.resolve(__dirname, 'src/app/styles'),
        },
        extensions: [
            '.js',
            '.jsx'
        ],
        modules: [
            path.resolve(__dirname, 'src/app'),
            path.resolve(__dirname, 'node_modules/'),
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'src/app/index.html'),
            filename: "./index.html"
        }),
        new BundleAnalyzerPlugin()
    ],
    devServer: {
        compress: true,
        port: 8080
    }
}