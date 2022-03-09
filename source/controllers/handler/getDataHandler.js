const getData = require("../../database/queries/getData");
const getDataFun = (req,res) =>{
 getData()
 .then(data=>res.json(data.rows));
};

module.exports= getDataFun;

