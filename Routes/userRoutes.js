

const { Router } = require("express")
const {USerRegistration}=require("../Controller/userController")
const routes=Router()
routes.post("/register",USerRegistration)
module.exports=routes