const router = require('express').Router();
const {getDataFun , postData, notFound, getNameFun} = require("../controllers/")

router.post("/feedback/:id" ,postData )

router.get("/result/:id",getDataFun)

router.get("/names",getNameFun)

router.use(notFound)

module.exports = router;