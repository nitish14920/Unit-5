const express = require("express")
const router = express.Router()
const User = require("../models/user.model")
router.get("/",async (req,res)=>{
    const user = await User.find().lean().exec();
    return res.send(user)
})

router.post("/",async(req,res)=>{
    try{
        const user = await User.create(req.body);
        return res.status(201).send(user)
    }
    catch(error){
        return res.status(400).send(error.message)
    }
})

module.exports = router;