import React, { useContext, useEffect, useState} from 'react'
import Login from './Components/Auth/Login.jsx'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { AuthContext} from './Context/AuthProvider.jsx'
import { setLocalStorage,} from './Utils/LocalStorage.jsx'
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom'
import HomePage from './Components/HomePage.jsx'



const App = () => {
const { userData} = useContext(AuthContext);
const [user, setUser] = useState(null)
const [loggedInUserData, setloggedInUserData] = useState(null)


const navigate = useNavigate()


useEffect(() => {
  setLocalStorage()

  const loggedInUser = JSON.parse(localStorage.getItem( 'loggedInUser'))
  if(loggedInUser) {
    setUser(loggedInUser.role)
    if(loggedInUser.role === 'employee') {
  
 setloggedInUserData(loggedInUser.employeeData)
  }
  }

  }, [])



const handleLogin = (email, password) => {
  if(email === 'admin@me.com' && password === '123') {
    setUser('admin')
    localStorage.setItem('loggedInUser', JSON.stringify({ role:'admin' }))
navigate('/admin-dashboard')
    return
  }
  if(userData && userData.employees) {
    const employee = userData.employees.find(
      (e) => e.email ===email && e.password === password
    )


if (employee) {
  setUser('employee')
  setloggedInUserData(employee)
  localStorage.setItem(
    'loggedInUser',
    JSON.stringify({role: 'employee', employeeData: employee})
  )
  navigate('/employee-dashboard')
 } else{
  alert('Invalid credentials')
 }

}else{
  alert('Data not loaded yet')
}
}
 const handleLogout = () => {
   setUser(null)
   setloggedInUserData(null)
  localStorage.removeItem('loggedInUser')
  navigate('/')
 }




  return (
    
  <Routes>
      
      <Route path="/" element={<HomePage />} />

      
      <Route path="/login" element={
        !user ? <Login handleLogin={handleLogin} /> : <Navigate to={user === 'admin' ? "/admin-dashboard" : "/employee-dashboard"} />
      } />

    
      <Route path="/admin-dashboard" element={
        user === 'admin' ? <AdminDashboard handleLogout={handleLogout} employees={userData?.employees} /> : <Navigate to="/login" />
      } />

      
      <Route path="/employee-dashboard" element={
        user === 'employee' ? <EmployeeDashboard data={loggedInUserData} handleLogout={handleLogout} /> : <Navigate to="/login" />
      } />
    </Routes>
  )
}
export default App
