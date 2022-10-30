const express = require('express')
const router = new express.Router()
const Student = require('../models/register')

router.get('/router', (req, res)=>{
    res.send("Hello this is from router ,,,,,")
})

// index page view
router.get('/', (req, res)=>{
    res.end('Hello this is all we need')
})


// Create a document of student 
// router.get('/students', async(req, res)=>{
//     const addStudent = new Student({
//         name : "Javed",
//         cast : "Jokhio",
//         age : 22,
//         subject : "React Designer"
//     })

//     const saveStudent = await addStudent.save()
//     res.send(saveStudent)
// })


// Get the Student collection
router.get('/students', async(req, res)=>{
    const findStudent = await Student.find()
    res.send(findStudent)
})


// Get one student using Id
// router.get('/students', async(req, res)=>{
//     const findStudent = await Student.findById('63179dd0b2928a2f220b9734')
//     res.send(findStudent)
// })

// Updating Document
// router.get('/students', async(req, res)=>{
//     const findStudent = await Student.findByIdAndUpdate('63179dd0b2928a2f220b9734', {'subject':'Graphic wala'}, {new:true})
//     res.send(findStudent)
// })


// Delete one record
// router.get('/students', async(req, res)=>{
//     const findStudent = await Student.findByIdAndDelete('63179dd0b2928a2f220b9734', {'subject':'Graphic wala'})
//     res.send(findStudent)
// })

module.exports = router