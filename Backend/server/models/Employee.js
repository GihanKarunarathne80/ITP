const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    EmployeeID: String, 
    EmployeeName: String, 
    Email: String,
    Age: Number,
    Address: String,
    ContactNumber: Number,
    Description: String
})

const EmployeeModel = mongoose.model("employees", EmployeeSchema)
module.exports = EmployeeModel