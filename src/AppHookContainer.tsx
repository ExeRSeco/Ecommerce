
import { AppRouter } from './AppRouter'
import App from './App'
import { ModalProvider } from './Contexts/ModalContext'
import { CartProvider } from './Contexts/CartProvider'


export const AppHookContainer = () => {


  return (
    <ModalProvider>
      <CartProvider>
          <App >
            <AppRouter />
          </App>
      </CartProvider>
    </ModalProvider>
  )
}

