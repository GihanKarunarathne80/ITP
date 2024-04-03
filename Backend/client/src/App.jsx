import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Employees from './Employees'
import CreateEmployees from './CreateEmployees'
import UpdateEmployees from './UpdateEmployees'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Employees />}></Route>
          <Route path='/create' element={<CreateEmployees />}></Route>
          <Route path='/update/:id' element={<UpdateEmployees />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
