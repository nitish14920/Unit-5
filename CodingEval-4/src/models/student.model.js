const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    roll_number:{type:Number,required:true},
    user:{type:String,required:true},
    batch:{type:String,required:true}
})

const Student = new mongoose.model("student",studentSchema)
module.exports = Student;