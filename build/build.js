// 一定要放到最前边
const MODULE_NAME = process.argv[3];  // 打包的模块
const SINGLE_BUNDLE = process.argv[2]; // 是否是单独打包
if(MODULE_NAME){
  process.env.MODULE_NAME = MODULE_NAME;
}
if(SINGLE_BUNDLE){
  process.env.SINGLE_BUNDLE = SINGLE_BUNDLE;
}

console.log('------------------------------------------------------',MODULE_NAME,SINGLE_BUNDLE)

const webpack = require("webpack")
const ora = require("ora");

const chalk = require("chalk")
const WebpackConfig = require("./webpack.prod.conf")

// 启动动画
const spinner = ora('building...')
spinner.start()


// 开始构建
webpack(WebpackConfig,function(err,stats){
    // 停止动画
    spinner.stop()
    // 打包出错，抛出异常信息
    if (err) throw err
    // 控制台输出打包成功信息
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
    process.exit(); // 终止终端进程
})