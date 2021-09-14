'use strict'
const {merge} = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const webpack = require('webpack');
const path = require('path')

module.exports = merge(baseWebpackConfig,{
    //模式
    mode:'development',
    //调试工具
    devtool:'source-map',  
    
    //开发服务器
    devServer:{
        static:path.resolve('static'),  //默认为'/',及webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务，应在这里设置所在目录
        historyApiFallback:true, //当后端路由没有命中，就会自动render index.html
        // historyApiFallback: {
        //     rewrites: [{
        //             from: /error/,
        //             to: '/index.html'
        //         },
        //     ]
        // },
        compress:true, //启动gzip压缩
        // inline:true,  //是否在源文件改变时自动刷新页面
        // hot:true,  //模块热更新，取决于HotModuleReplacementPlugin
        liveReload:true,
        // hotOnly: true,  //即使是HMR没有生效，我们也不去刷新页面
        host:'127.0.0.1', //设置默认监听域名，如果省略，默认为“localhost”
        port:8089,  //设置默认端口，如果省略，默认为“8080”
    },
    plugins:[
        //热更新相关
        // new webpack.NamedModulesPlugin(),   //webpack5已经不支持NamedModulesPlugin插件
        new webpack.HotModuleReplacementPlugin() ,  //简称为HRM,在热加载时直接返回更新文件名，而不是文件的id
        new webpack.DefinePlugin({
            "process.env":{
                NODE_ENV: JSON.stringify("development"),
            },
        })
    ],
    //配置
    optimization:{
        nodeEnv:'development',
        moduleIds: 'named',
    }
})