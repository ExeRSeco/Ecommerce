import React, { useState } from 'react'

export const FormLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    console.log(formData)
  }

  return (
    <div className="container-login">
        <div className="img-login">
            <img src="./public/img/login1.jpg" alt="logo" className='img-login' />
            <div className='back-to-home'>
                <a href="/" className='text-white'>Back to home</a>
            </div>
        </div>
        <div className="form-login w-1/2 h-full flex flex-col justify-center items-center">
          <h2 className='text-center text-5xl text-white font-bold mb-2 text-shadow-lg'>Login</h2>

          <form onSubmit={handleSubmit} className='flex mt-2.5 flex-col gap-2 p-4 w-full' >
            <label className='text-2xl font-bold text-white'>Username:</label>
            <input 
              type="text" 
              name="username" 
              value={formData.username}
              onChange={handleChange}
              className='border-2 border-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white text-white' 
            />

            <label className='text-2xl font-bold text-white'>Password:</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password}
              onChange={handleChange}
              className='border-2 border-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white text-white' 
            />

            <button type="submit" className='button-login text-white p-2 rounded-md transition-all duration-300 cursor-pointer font-bold'>Login</button>
            <div className='flex justify-center items-center'>
              <p className='text-white'>Dont have an account? <a href="/register" className='link-register'>Register</a></p>
            </div>
          </form>
        </div>
    </div>
  )
}


