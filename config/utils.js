const path = require("path")
// const config = require('./config.json');
exports.resolve = function (dir) {
    return path.resolve(__dirname, dir)
}  

exports.assetsPath = function (_path) {
    return path.posix.join("static", _path)
}