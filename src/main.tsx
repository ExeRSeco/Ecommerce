import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { AppHookContainer } from './AppHookContainer.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
   
      <AppHookContainer />
   
  </StrictMode>,
)
