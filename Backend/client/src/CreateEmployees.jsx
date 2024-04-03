import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function CreateEmployees () {
    const [EmployeeID, setEmployeeID] = useState()
    const [EmployeeName, setEmployeeName] = useState()
    const [Email, setEmail] = useState()
    const [Age, setAge] = useState()
    const [Address, setAddress] = useState()
    const [ContactNumber, setContactNumber] = useState()
    const [Description, setDescription] = useState()
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();

        if (!EmployeeID || !EmployeeName || !Email || !Age || !Address || !ContactNumber || !Description) {
            alert('Please fill in all the fields.');
            return;
        }
        axios.post("http://localhost:3001/createEmployee", {EmployeeID,EmployeeName,Email,Age,Address,ContactNumber,Description})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className='container'>
            <div className="content1">
                <Link to="/" className='text-info'>Home</Link>
                    <form onSubmit={Submit}>  
                        <h2>Add New Employee</h2>
                <div className='mb-2'>
                    <label htmlFor="">Employee Id</label>
                    <input type="text" placeholder="Enter employee id" className="form-control"
                    onChange={(e) => setEmployeeID(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Employee Name</label>
                    <input type="text" placeholder="Enter employee name" className="form-control"
                    onChange={(e) => setEmployeeName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Enter the Email" className="form-control"
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Age</label>
                    <input type="text" placeholder="Enter the age" className="form-control"
                    onChange={(e) => setAge(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder="Enter the address" className="form-control"
                    onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <div className='mb-2'>
                        <label htmlFor="">Contact Number</label>
                        <input type="text" placeholder="Enter the contact no" className="form-control"
                        onChange={(e) => setContactNumber(e.target.value)} />
                    </div>
                <div className='mb-2'>
                    <label htmlFor="">Discription</label>
                    <input type="text" placeholder="Enter the discription" className="form-control"
                    onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <button className=" btn-success">Submit</button>
            </form>
           </div>
        </div>
    )
}

export default CreateEmployees;