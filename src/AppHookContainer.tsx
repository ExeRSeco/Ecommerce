import { AppRouter } from './AppRouter'
import App from './App'
import { ModalProvider } from './Contexts/ModalContext'
import { CartProvider } from './Contexts/CartProvider'
import { BrowserRouter } from 'react-router-dom'
import ErrorBoundary from './Components/Error/ErrorBoundary'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const AppHookContainer = () => {
const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ErrorBoundary>
        <ModalProvider>
          <CartProvider>
            <App>
              <AppRouter />
            </App>
          </CartProvider>
        </ModalProvider>
      </ErrorBoundary>
    </BrowserRouter>
    </QueryClientProvider>
  )
}


