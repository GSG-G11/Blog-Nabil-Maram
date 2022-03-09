const getDataFun = require("./handler/getDataHandler")
const postData = require("./handler/publicHandler")
const getNameFun = require("./handler/namesInCon")
const notFound = require("./error")

module.exports= {
  getDataFun,
  postData, 
  notFound, 
  getNameFun
}