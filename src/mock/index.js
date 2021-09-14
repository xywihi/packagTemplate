const Mock = require('mockjs');
import homeInfo from './json/homeInfo.json'



Mock.mock('/home/imfo','get',homeInfo)