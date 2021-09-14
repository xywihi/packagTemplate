'use strict'
const HtmlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const utils = require("./utils")
const path = require('path')
const Global=`var process={
    env:{
        NODE_ENV:'development'
    }
}`
module.exports={
    //入口起点
    entry:{
        app:'./src/app'
    },
    //出口
    output:{
        path:utils.resolve('../dist'),
        filename:"js/[name].[hash].js",
        chunkFilename:utils.assetsPath("js/[name].[chunkhash].js"),
        publicPath: "/",
        // banner:Global
    },
    //解析
    resolve:{
        extensions: ['.js', '.json'],
        alias: {
            '@': path.resolve(__dirname, '..', "src") // 在项目中使用@符号代替src路径，导入文件路径更方便
        }
    },  
    //loader
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader',//loader的名称（必须）
            },
            {
                test: /\.css$/,
                use:[
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            // hmr: utils.isDev(), // 开发的时候，修改css热更新，但是试了下不起作用
                            // reloadAll:true,
                        }
                    },
                    // {
                    //     loader: 'style-loader', // 创建 <style></style>
                    // },
                    { 
                        loader: 'css-loader',  // 转换css
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000, // url-loader 包含file-loader，这里不用file-loader, 小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
                    name: 'static/img/[name].[hash:7].[ext]'
                }
            },
        ]
    },
    //插件
    plugins:[
        new HtmlWebpackPlugin({
            title:'CESHIXIANGMU',   //html 文件的标题
            filename:utils.resolve('./../dist/index.html'),
            template:'./index.html',  //true|body|head|false  html文件的位置
            inject:'body',
            favicon: 'static/icons/logo.ico',
            minify:{
                removeAttributeQuotes:true, //移除属性的引号
            },
            hash:true,
            cache:true,  //只有在内容变化时才生成一个新的文件
            chunks:['app'],
            // excludeChunks      //跟 chunks 是相反的，排除掉某些 js 文件
            xhtml:false    //默认值是 false ，如果为 true ,则以兼容 xhtml 的模式引用文件
        }),
        new MiniCssExtractPlugin({chunkFilename: utils.assetsPath('css/[id].[chunkhash].css'),})
    ],
}