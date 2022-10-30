const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    name : String,
    cast : String,
    age : Number,
    subject : String
})

// Create a instance class for model and name the collection Student
const Student = new mongoose.model("Student", studentSchema)

module.exports = Student