const getData = require("../../database/queries/getData");
const getDataFun = (req,res) =>{
 getData()
 .then(data=>
    { 
        const userId = req.params.id;
const filtred = data.rows.filter(item=>item.id == userId);
      
return res.json(filtred)
    });
};

module.exports= getDataFun;

