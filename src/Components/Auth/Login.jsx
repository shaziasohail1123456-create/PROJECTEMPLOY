import React, { useState } from 'react'

const Login = ({handleLogin}) => {


const [email, setEmail] = useState ('')
const [password, setPassword] = useState ('')


const submitHandler = (e)=>{
    e.preventDefault()
    handleLogin(email,password)

setEmail("")
setPassword("")
}

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-black'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>
        <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-purple-600">Login</h1>
        <form  onSubmit={submitHandler} className='flex flex-col items-center justify-center'>
            <input 
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }

            }
            required
             className='text-white mt-5 outline-none bg-transparent border-2 border-emerald-600 text-xl rounded-full py-3 px-5 placeholder:text-grey-600' type="email" placeholder='Enter your email' autoComplete='email' />
            <input
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            required 
            className='text-white outline-none bg-transparent border-2 red border-emerald-600 text-xl rounded-full mt-10 py-3 px-5 placeholder:text-gray-600' type="password" placeholder='Enter Password' autoComplete='current-password' />
            <button className='w-full mt-5 bg-emerald-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-full shadow-md transition-colors duration-300' >Login</button>

        </form>
      </div>
    </div>
  )
}

export default Login
