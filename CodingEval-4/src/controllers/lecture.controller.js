const express = require("express");
const authenticate = require("../middlewares/authenticate");
const router = express.Router()
const Lecture = require("../models/lecture.model")
router.get("/",async (req,res)=>{
    const lecture = await Lecture.find().lean().exec();
    return res.send(lecture)
})

router.post("/",authenticate,async(req,res)=>{
    try{
        const lecture = await Lecture.create(req.body);
        return res.status(201).send(lecture)
    }
    catch(error){
        return res.status(400).send(error.message)
    }
})

router.get("/",async(req,res)=>{
    try{
        const lecture = await Lecture.find().lean().exec()
        return res.status(200).send(lecture)
    }
    catch(error){
        return res.status(400).send({message:"Error"})
    }
})
router.get("/:id",async(req,res)=>{
    try{
        const lecture = await Lecture.find(req.params.id)
        return res.status(200).send(lecture)
    }
    catch(error){
        return res.status(400).send({message:"Error"})
    }
})

router.delete("/:id",authenticate,async(req,res)=>{
    try{
        const lecture = await Lecture.findByIdAndDelete(req.params.id, req.body);
        return res.status(201).send(lecture)
    }
    catch(error){
        return res.status(400).send({message:"not authenticated"})
    }
})


module.exports = router;