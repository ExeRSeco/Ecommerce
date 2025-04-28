import { AppRouter } from './AppRouter'
import App from './App'
import { ModalProvider } from './Contexts/ModalContext'
import { CartProvider } from './Contexts/CartProvider'
import { BrowserRouter } from 'react-router-dom'

export const AppHookContainer = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <CartProvider>
          <App>
            <AppRouter />
          </App>
        </CartProvider>
      </ModalProvider>
    </BrowserRouter>
  )
}

