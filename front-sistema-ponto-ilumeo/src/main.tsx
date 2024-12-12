import './themes/styles.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { configRouter } from './rotas/Router.tsx'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './@global/api/api.ts'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <ChakraProvider value={defaultSystem}>
    <RouterProvider router={configRouter} />
    </ChakraProvider>
    </QueryClientProvider>

  </StrictMode>,
)
