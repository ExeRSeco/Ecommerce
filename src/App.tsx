import { Header, Footer, Cart} from './Components/index'
import { AppRouterProps } from './Types/types'
import { useLocation } from 'react-router-dom'

function App( {children}: AppRouterProps) {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!isAuthPage && <Header />}
      <Cart />
      {children}
      {!isAuthPage && <Footer />}
    </>
  );
}

export default App
