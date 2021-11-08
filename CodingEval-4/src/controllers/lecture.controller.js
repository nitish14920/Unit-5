const express = require("express")
const router = express.Router()
const Lecture = require("../models/lecture.model")
router.get("/",async (req,res)=>{
    const lecture = await Lecture.find().lean().exec();
    return res.send(lecture)
})

router.post("/",async(req,res)=>{
    try{
        const lecture = await Lecture.create(req.body);
        return res.status(201).send(lecture)
    }
    catch(error){
        return res.status(400).send(error.message)
    }
})

module.exports = router;