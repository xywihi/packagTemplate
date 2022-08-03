const Mock = require('mockjs');
import homeInfo from './json/homeInfo.json'



export default Mock.mock('/home/imfo','get',homeInfo)