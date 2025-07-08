const express =require("express")
const dotenv=require("dotenv")
const CONNECTDB=require("./Config/db.js")
dotenv.config()
const app=express()
app.get('/',(req,res)=>{
    res.send({ "Message":"Hello my first API"})})


const PORT=process.env.PORT 
app.listen(PORT,async () => {

   try {
    await CONNECTDB()
    console.log(`server running in localhost${PORT}`);
   } catch (error) {
    console.log(error)
   }
    
})