// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// const EmployeeModel = require('../models/Employee')


// const app = express()
// app.use(cors())
// app.use(express.json())

// mongoose.connect("mongodb://127.0.0.1:27017/Salon")

// app.get('/', (req,res) => {
//     EmployeeModel.find({})
//     .then(employee => res.json(employee))
//     .catch(err => res.json(err))
// })

// app.get('/getEmployee/:id', (req,res) => {
//     const id = req.params.id;
//     EmployeeModel.findById({_id:id})
//     .then(employee => res.json(employee))
//     .catch(err => res.json(err))
// })

// app.put("/UpdateEmployee/:id", (req,res) => {
//     const id = req.params.id;
//     EmployeeModel.findByIdAndUpdate({_id:id}, {
//         EmployeeID: req.body.EmployeeID, 
//         EmployeeName: req.body.EmployeeName, 
//         Email: req.body.Email,
//         Age: req.body.Age,
//         Address: req.body.Address,
//         ContactNumber: req.body.ContactNumber,
//         Description: req.body.Description, 
//     })
//     .then(employee => res.json(employee))
//     .catch(err => res.json(err))
// })

// app.delete('/deleteUser/:id', (req,res) => {
//     const id = req.params.id;
//     EmployeeModel.findByIdAndDelete({_id:id})
//     .then(res => res.json(res))
//     .catch(err => res.json(err))
// })

// app.post("/createEmployee", (req,res) => {
//     EmployeeModel.create(req.body)
//     .then(employee => res.json(employee))
//     .catch(err => res.json(err))
// })

// app.listen(3001, () => {
//     console.log("Server is Running")
// })