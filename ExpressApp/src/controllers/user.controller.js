const express = require("express")
const sendmail = require("../utills/sendmail")
const router = express.Router()
const User = require("../models/user.model")
router.post("/",async (req,res)=>{
    try{
        const user = await User.create(req.body)
        const users = await User.find().lean().exec()

        const to =[]
        users.map((el)=>{to.push(el.email)})
        //Sending mail
       await sendmail({from:user.email,to:to,subject:"New User Joined",text:"hello",html:"<h1>Hello</h1>"})
        console.log(users)
        return res.status(200).json({user:user})
    }
    catch(err){
        return res.status(400).json({massage:err})
    }
   
})
router.get("/",async (req,res)=>{
    try{

        const page = +req.query.page || 1
        const size = +req.query.size || 10
        const totalpages = Math.ceil((await User.find().countDocuments())/size)
        const offset = (page-1)*size
        const users = await User.find().skip(offset).limit(size).lean().exec()
        return res.status(200).json({users,totalpages})
    }
    catch(err){
        return res.status(400).json({massage:"Error Occured"})
    }
   
})

module.exports = router