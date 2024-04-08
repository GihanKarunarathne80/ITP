import React, {useEffect, useState} from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios'

function UpdateEmployees () {
    const {id} = useParams()
    const [EmployeeID, setEmployeeID] = useState()
    const [EmployeeName, setEmployeeName] = useState()
    const [Email, setEmail] = useState()
    const [Age, setAge] = useState()
    const [Address, setAddress] = useState()
    const [ContactNumber, setContactNumber] = useState()
    const [Description, setDescription] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/getEmployee/'+id)
        .then(result => {console.log(result)
            setEmployeeID(result.data.EmployeeID)
            setEmployeeName(result.data.EmployeeName)
            setEmail(result.data.Email)
            setAge(result.data.Age)
            setAddress(result.data.Address)
            setContactNumber(result.data.ContactNumber)
            setDescription(result.data.Description)
        })
        .catch(err => console.log(err))
    }, [])

    const Update = (e) => {
        e.preventDefault()
        axios.put("http://localhost:3001/UpdateEmployee/" + id, {EmployeeID,EmployeeName,Email,Age,Address,ContactNumber,Description})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="container1">
            <div className="content1">
                <Link to="/" className='text-info'>Home</Link>
                    <form onSubmit={Update}>
                        <h2>Add New Employee</h2>
                        <div className='mb-2'>
                    <label htmlFor="">Employee Id</label>
                    <input type="text" placeholder="Enter employee id" className="form-control"
                    value={EmployeeID}
                    onChange={(e) => setEmployeeID(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Employee Name</label>
                    <input type="text" placeholder="Enter employee name" className="form-control"
                    value={EmployeeName}
                    onChange={(e) => setEmployeeName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Enter the Email" className="form-control"
                    value={Email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Age</label>
                    <input type="text" placeholder="Enter the age" className="form-control"
                    value={Age}
                    onChange={(e) => setAge(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder="Enter the address" className="form-control"
                    value={Address}
                    onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Contact Number</label>
                    <input type="text" placeholder="Enter the contact no" className="form-control"
                    value={ContactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor="">Discription</label>
                    <input type="text" placeholder="Enter the discription" className="form-control"
                    value={Description}
                    onChange={(e) => setDescription(e.target.value)}/>
                </div>
                
                <button className="btn-success">Submit</button>
            </form>
           </div>
        </div>
    )
}

export default UpdateEmployees;