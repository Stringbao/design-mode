const webpack = require('webpack');
const path = require("path");
const SSICompileWebpackplugin = require('ssi-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports =  {
    mode: "development",
    devtool: "cheap-module-eval-source-map",
    entry:"./inject/index.js",
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]',
                    outputPath: 'static/images/'
                }
            },
            {
                test: /\.css$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
                loader: 'url-loader', options: { name: 'fonts/[name].[hash:8].[ext]' }//项目设置打包到dist下的fonts文件夹下
            },
        ]
    },
    devServer: {
        contentBase: "./dist",
        hot: true,
        https:true,
        watchContentBase: true,
        openPage: "./index.html",
        host:"t.gl.lenovouat.com",
        // host:"pre.gl.lenovo.com",
        // host:"pro.gl.lenovo.com",
        port:9987,
        proxy: {
            
        }
    },
    resolve: {
        extensions: ['.js', '.json', ".css"],
        alias: {
            
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $:"jquery"
        }),
        // new webpack.ProvidePlugin({
        //     $http:[path.resolve(__dirname,"../http/index.js"), "default"]
        // }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'test title',
            filename: 'index.html',
            template: './inject/index.html',
            minify:false
        })
    ],
    watchOptions: {
        ignored: /node_modules/
    }
}