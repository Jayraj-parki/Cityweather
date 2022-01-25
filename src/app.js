const express=require('express')
const path=require('path')
const hbs=require('hbs')
const app=express()
const port=process.env.PORT || 8000


app.use(express.static(path.join(__dirname,"../public"))) //very imp
const template_path =path.join(__dirname,"../templates/views")
const partial_path =path.join(__dirname,"../templates/partials")


app.set("view engine","hbs")
app.set("views",template_path)
hbs.registerPartials(partial_path)


app.get("/",(req,res)=>{
    res.render("index")
})
// app.get("/about",(req,res)=>{
//     res.render("about")
// })
app.get("/whether",(req,res)=>{
    res.render("whether")
})
app.get("*",(req,res)=>{
    res.render("error",{
        error:"Oops !!! Page Not Fount" 
    })
})

app.listen(port,()=>{
    console.log("listening at port 8000")
})



