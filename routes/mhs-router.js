const express =require("express")
const mhsRouter=express.Router()

const MhsController=require("../controller/mhs-controller")
mhsRouter.get("/",MhsController.listMhs)
mhsRouter.get("/:id",MhsController.findOne)

module.exports=mhsRouter