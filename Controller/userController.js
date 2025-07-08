const User=require("../models/User")
const USerRegistration=async (req,res) => {
    try {
        const{username,email,password}=req.body
if(!username || !email || !password){
    return res.status(422).json({"Message":"Fill in all fields"}) 
}
const newuser= await User.create({username,email,password})
return res.status(201).json(newuser)

    } catch (error) {
        console.log("registration failed",error)
    }
}



module.exports={USerRegistration}