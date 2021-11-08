const mongoose = require("mongoose");
const lectureSchema = new mongoose.Schema({
    title:{type:Number,required:true},
    instructor:{type:String,required:true},
    batch:{type:String,required:true}
})

const Lecture = new mongoose.model("lecture",lectureSchema)
module.exports = Lecture;