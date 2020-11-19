const express = require("express")
const indexRouter = express.Router()
const mahasiswa = require("./mhs-router")
const matakuliah =require("./mtk-router")

const MainController = require('../controller/mainController')



indexRouter.get('/', MainController.showHome)

indexRouter.use("/mahasiswa",mahasiswa)
indexRouter.use("/matakuliah",matakuliah)

module.exports=indexRouter