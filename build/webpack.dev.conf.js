'use strict'
const {merge} = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const path = require('path')
const { getModuleList , getBuildEntry} = require("./module-entry")
const utils = require("./utils")


// 获取各个模块
const moduleList = getModuleList();

const HtmlWebpackPluginList = [];
for(let index in moduleList){
    const moduleName = moduleList[index]
    HtmlWebpackPluginList.push(new HtmlWebpackPlugin({
        filename: utils.resolve('./../dist/'+ moduleName+ '/index.html'), // html模板的生成路径
        template: utils.resolve("./../src/modules/" + moduleName + "/index.html"),//html模板
        inject: true, // true：默认值，script标签位于html文件的 body 底部
        chunks: [moduleName],  // 注入哪个名称bundel
    }))
}

// 需要在开发环境重写的规则数组
const rewrites = [];  // webpack-dev-server的historyApiFallback中使用
for(let index in moduleList){
    const moduleName = moduleList[index]
    // 以模块名开头的路径，重定向到 改模块下的index.html模板文件 比如路径一以/a开头，会重定向到a模块下的index.html 
    rewrites.push({
        from:new RegExp('^\/' + moduleName), 
        to:utils.resolve('/' + moduleName +'/index.html')
    })
}

module.exports = merge(baseWebpackConfig,{
    entry: getBuildEntry(),
    //模式
    mode:'development',
    //调试工具
    devtool:'source-map',  
    module:{
        rules:utils.cssLoaders()
    },
    //开发服务器
    devServer:{
        static:path.resolve('static'),  //默认为'/',及webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务，应在这里设置所在目录
        historyApiFallback:true, //当后端路由没有命中，就会自动render index.html
        historyApiFallback: {
            rewrites: rewrites
        },
        compress:true, //启动gzip压缩
        // inline:true,  //是否在源文件改变时自动刷新页面
        // hot:true,  //模块热更新，取决于HotModuleReplacementPlugin
        liveReload:true,
        // hotOnly: true,  //即使是HMR没有生效，我们也不去刷新页面
        host:'172.17.57.153' || '127.0.0.1', //设置默认监听域名，如果省略，默认为“localhost”
        // host:'192.168.2.46'|| '172.17.57.153' || '127.0.0.1', //设置默认监听域名，如果省略，默认为“localhost”
        port:8080,  //设置默认端口，如果省略，默认为“8080”
        proxy: {
            '/': {
                target: 'http://18.163.111.177:12220',
                secure: true,
                changeOrigin: true
            }
        }
    },
    plugins:[
        //热更新相关
        // new webpack.NamedModulesPlugin(),   //webpack5已经不支持NamedModulesPlugin插件
        new webpack.HotModuleReplacementPlugin() ,  //简称为HRM,在热加载时直接返回更新文件名，而不是文件的id
        // new webpack.DefinePlugin({
        //     "process.env":{
        //         NODE_ENV: JSON.stringify("development"),
        //     },
        // })
        new HtmlWebpackPlugin({
            title:'CESHIXIANGMU',   //html 文件的标题
            favicon:'static/icons/logo.ico',
            filename: utils.resolve('./../dist/index.html'), // html模板的生成路径
            template: 'index.html',//html模板
            chunks: ['app'], // 至注入app和app相关的bundle
            inject: true, // true：默认值，script标签位于html文件的 body 底部
        }),
    ].concat(HtmlWebpackPluginList),
    //配置
    optimization:{
        nodeEnv:'development',
        moduleIds: 'named',
    }
})