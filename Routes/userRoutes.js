

const { Router } = require("express")
const {USerRegistration,GetAllUser}=require("../Controller/userController")
const routes=Router()
routes.post("/register",USerRegistration)
routes.get("/get",GetAllUser)

module.exports=routes