const router = require('express').Router();
const {getDataFun , postData} = require("../controllers/")

router.post("/feedback/:id" ,postData )

router.get("/result",getDataFun)

module.exports = router