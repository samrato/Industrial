const User=require("../models/User")
const bcrypt=require("bcryptjs")
const USerRegistration=async (req,res) => {
    try {
        const{username,email,password}=req.body
if(!username || !email || !password){
    return res.status(422).json({"Message":"Fill in all fields"}) 
}
if(username.length<3){
    return res.status(422).json({"Message":"username is less than 3"}) 
}

if(password.trim().length<6){
    return res.status(422).json({"Message":"password is less than required "}) 
}
const existinguser =await User.findOne({email})
if(existinguser){
    return res.status(422).json({"Message":"Email already exist  "}) 
}
const salt= await bcrypt.genSalt(10)
const HashedPassword= await bcrypt.hash(password,salt)
const newuser= await User.create({username,email,password:HashedPassword})
return res.status(201).json(newuser)

    } catch (error) {
        console.log("registration failed",error)
    }
}



module.exports={USerRegistration}