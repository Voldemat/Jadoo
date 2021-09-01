const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output:{
        path: path.resolve(__dirname, 'public'),
        filename: '[contenthash].bandle.js',
        clean: true
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use: [
                    {
                        loader:'babel-loader',
                        options:{
                            sourceMaps:true,
                            presets:[
                                '@babel/preset-env'
                            ]
                        }
                    },
                ]
            },
            {
                test: /\.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use:'html-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "src/assets", to: "assets" }
            ],
        }),
    ],
    devServer:{
        contentBase: path.resolve(__dirname, 'public'),
        compress: true,
        port: 3000
    }
}