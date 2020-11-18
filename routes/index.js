const express =require("express")
const indexRouter=express.Router()

const mahasiswa=require("./mhs-router")
indexRouter.use("/mahasiswa",mahasiswa)

module.exports=indexRouter