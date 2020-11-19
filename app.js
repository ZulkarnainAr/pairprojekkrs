const express=require("express")
const app=express()
const PORT= 3000

const routes=require("./routes/index")

//view engine
app.set("view engine","ejs")

//middleware
app.use(express.urlencoded({extended:false}))

//route
app.use("/",routes)

app.listen(PORT, function(){
    console.log("listening at port,",PORT)
})