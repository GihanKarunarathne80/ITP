import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Employee.css'

function Employees () {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001')
        .then(result => setEmployees(result.data))
        .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res => {console.log(res)
            window.location.reload()})
        .catch(errr => console.log(errr))
    }

    return (
        <div className="container1">
            <div className="content1">
                <Link to="/create" className='btn-success'>Add New Employee</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Employee Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Contact Number</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((employee) => {
                                return  <tr>
                                            <td>{employee.EmployeeID}</td>
                                            <td>{employee.EmployeeName}</td>
                                            <td>{employee.Email}</td>
                                            <td>{employee.Age}</td>
                                            <td>{employee.Address}</td>
                                            <td>{employee.ContactNumber}</td>
                                            <td>{employee.Description}</td>
                                            <td>
                                                <Link to={`/update/${employee._id}`} className='btn-success'>Update</Link>
                                                <button className='btn-success' onClick={(e) => handleDelete(employee._id)}>Delete</button>
                                            </td>
                                        </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
            </div>
        
    )
}

export default Employees;