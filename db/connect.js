const mongoose = require("mongoose");

// Add db name Student-regist
mongoose.connect("mongodb://localhost:27017/Student-regist", {
})
.then(()=>{
    console.log("connected database")
}).catch((err)=>{
    console.log(err)
})