const getData = require("../../database/queries/getName");
const getNameFun = (req,res) =>{
 getData()
 .then(data=> res.json(data.rows));
};

module.exports= getNameFun;

