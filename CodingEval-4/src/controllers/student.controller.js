const express = require("express")
const router = express.Router()
const Student = require("../models/student.model")
router.get("/",async (req,res)=>{
    const student = await Student.find().lean().exec();
    return res.send(student)
})

router.post("/",async(req,res)=>{
    try{
        const student = await Student.create(req.body);
        return res.status(201).send(student)
    }
    catch(error){
        return res.status(400).send(error.message)
    }
})

module.exports = router;