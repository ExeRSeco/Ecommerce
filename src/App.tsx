import { Header, Footer, Cart} from './Components/index'
import { AppRouterProps } from './Types/types'


 function App( {children}: AppRouterProps) {
  return (
    <>
      <Header />
      <Cart />
      {children}
      
      <Footer />
    </>
  )
 }

 export default App
