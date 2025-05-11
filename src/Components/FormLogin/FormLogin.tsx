import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Hooks'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

export const FormLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [error, setError] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()
  const auth = useSelector((state: RootState) => state.auth)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    const success = await login(formData.username, formData.password)
    if (success) {
      console.log('Estado de autenticación:', auth)
      navigate('/checkout')
    } else {
      setError('Credenciales inválidas')
    }
  }

  return (
    <div className="container-login bg-gray-900 p-4 rounded-lg shadow-lg flex justify-center items-center m-4">
        <div className="img-login bg-gray-100 h-full w-1/2 relative">
            <img src="./public/img/login1.jpg" alt="logo" className='img-login' />
            <div className='absolute top-4 right-4'>
                <a href="/" className='bg-gray-900 border-2 border-white rounded-lg p-2 text-white font-bold text-xl hover:bg-white hover:text-gray-900 transition-all duration-300'>Back to home</a>
            </div>
        </div>
        <div className="form-login w-1/2 h-full flex flex-col justify-center items-center">
          <h2 className='text-center text-5xl text-white font-bold mb-2 text-shadow-lg'>Login</h2>

          <form onSubmit={handleSubmit} className='flex mt-2.5 flex-col gap-2 p-4 w-full' >
            {error && <p className="text-red-500 text-center">{error}</p>}
            
            <label className='text-2xl font-bold text-white'>Username:</label>
            <input 
              type="text" 
              name="username" 
              value={formData.username}
              onChange={handleChange}
              className='border-2 border-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white text-white' 
              required
            />
s
            <label className='text-2xl font-bold text-white'>Password:</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password}
              onChange={handleChange}
              className='border-2 border-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white text-white' 
              required
            />

            <button type="submit" className='button-login text-white p-2 rounded-md transition-all duration-300 cursor-pointer font-bold bg-blue-500 hover:bg-blue-600'>Login</button>
            <div className='flex justify-center items-center'>
              <p className='text-white'>Dont have an account? <a href="/register" className='link-register text-blue-500 hover:text-blue-600 transition-all duration-300'>Register</a></p>
            </div>
          </form>
        </div>
    </div>
  )
}


