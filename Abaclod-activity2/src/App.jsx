import { useState } from 'react'
import StudentForm from './components/StudentForm'
import StudentList from './components/StudentList'
import StudentDetails from './components/StudentDetails'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Register from './pages/Register'
import {Routes, Route} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="d-flex justify-content-center">
      <div className="bg-info h-50">
  <NavBar/>         
      </div>
    </div>
  
  <div className="d-flex justify-content-center">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="/student/:id" element={<StudentDetails/>}/>
    </Routes>    
  </div>

    </>
  )
}

export default App
