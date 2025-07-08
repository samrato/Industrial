const express =require("express")
const dotenv=require("dotenv")
const CONNECTDB=require("./Config/db.js")
const routes=require("./Routes/userRoutes.js")
dotenv.config()
const app=express()
app.use(express.json())
app.use("/api",routes)

const PORT=process.env.PORT 
app.listen(PORT,async () => {

   try {
    await CONNECTDB()
    console.log(`server running in localhost${PORT}`);
   } catch (error) {
    console.log(error)
   }
    
})