import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'
import { FilterProvider } from './Context/FilterContext'
import './styles.css'
import { AppHookContainer } from './AppHookContainer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <FilterProvider>
        <AppHookContainer />
      </FilterProvider>
    </QueryClientProvider>
  </StrictMode>,
)
