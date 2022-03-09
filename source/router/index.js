const router = require('express').Router();
const {getDataFun , postData} = require("../controllers/")

router.post("/feedback/:id" ,postData )

router.get("/result/:id",getDataFun)
module.exports = router 