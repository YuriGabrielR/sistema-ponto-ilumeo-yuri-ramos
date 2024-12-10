import './themes/styles.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { configRouter } from './rotas/Router.tsx'
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={defaultSystem}>
    <RouterProvider router={configRouter} />
    </ChakraProvider>
  </StrictMode>,
)
