import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { login, logout } from '../features/auth/authSlice'

export const useAuth = () => {
  const dispatch = useDispatch()
  const auth = useSelector((state: RootState) => state.auth)

  const handleLogin = async (username: string, password: string) => {
    try {
      console.log('1. Iniciando login con:', { username, password })
      
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password
        }),
      })

      console.log('2. Status de la respuesta:', response.status)
      const data = await response.json()
      console.log('3. Datos recibidos:', data)

      if (!response.ok) {
        console.error('4. Error de la API:', data)
        throw new Error(data.message || 'Error en el login')
      }

      console.log('5. Login exitoso, actualizando estado...')
      dispatch(login({
        username: data.username,
        name: `${data.firstName} ${data.lastName}`,
        token: data.token
      }))
      console.log('6. Estado actualizado')

      return true
    } catch (error) {
      console.error('7. Error en el proceso de login:', error)
      return false
    }
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return {
    isAuthenticated: auth.isAuthenticated,
    user: auth.user,
    login: handleLogin,
    logout: handleLogout
  }
} 