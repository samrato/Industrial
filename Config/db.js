const mongoose=require("mongoose")
 const CONNECTDB=async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL,{})
console.log("database connected successfully")

    } catch (error) {
      cosole.log(error) 
      process.exit(1) 
    }
 }

 module.exports=CONNECTDB