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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden w-full max-w-4xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 relative">
                <img 
                    src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="login background" 
                    className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                    <a 
                        href="/" 
                        className="bg-gray-900/80 backdrop-blur-sm border-2 border-white rounded-lg px-4 py-2 text-white font-bold hover:bg-white hover:text-gray-900 transition-all duration-300"
                    >
                        Back to home
                    </a>
                </div>
            </div>
            
            <div className="lg:w-1/2 p-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 text-center text-shadow-lg">
                    Login
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                        <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg text-center">
                            {error}
                        </div>
                    )}
                    
                    <div className="space-y-2">
                        <label className="block text-xl font-bold text-white">
                            Username
                        </label>
                        <input 
                            type="text" 
                            name="username" 
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border-2 border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors duration-300" 
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-xl font-bold text-white">
                            Password
                        </label>
                        <input 
                            type="password" 
                            name="password" 
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg bg-gray-800 border-2 border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors duration-300" 
                            required
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300"
                    >
                        Login
                    </button>

                    <div className="text-center text-white">
                        <p className="text-sm lg:text-base">
                            Don't have an account?{' '}
                            <a 
                                href="/register" 
                                className="text-blue-500 hover:text-blue-400 font-bold transition-colors duration-300"
                            >
                                Register
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}


