/* eslint-disable perfectionist/sort-imports */
import { useMemo, useState, ReactNode, StrictMode, createContext  } from 'react'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material'

import './App.css'
import Add from './pages/Add.tsx'
import Home from './pages/Home.tsx'
import Edit from './pages/Edit.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: "/add",
    element: <Add />
  },
  {
    path: "/edit/:id",
    element: <Edit />
  }
]);

export const MUIWrapperContext = createContext({
  toggleColorMode: () => {}
})

const MUIWrapper = ({children}: {children: ReactNode}) => {
  const [mode, setMode] = useState<PaletteMode>('light')
  const muiWrapperUtils = useMemo(() => ({
    toggleColorMode: () => {
      setMode(prevMode => (prevMode === 'light'? 'dark' : 'light'))
    }
  }), [])
  const theme = useMemo(() => createTheme({
    palette: {
      mode
    }
  }), [mode])
  return (
    <MUIWrapperContext.Provider value={muiWrapperUtils}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </MUIWrapperContext.Provider>
  )
}


function App() {
  const queryClient = new QueryClient()

  return (
    <StrictMode>
      <MUIWrapper>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </MUIWrapper>
    </StrictMode>
  )
}

export default App
