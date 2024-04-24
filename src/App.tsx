/* eslint-disable perfectionist/sort-imports */
import { useRef, useMemo, useState, ReactNode, StrictMode, createContext } from 'react'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { closeSnackbar, SnackbarProvider as NotiStackProvider } from 'notistack'
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import { Box, IconButton, createTheme, PaletteMode, ThemeProvider } from '@mui/material'

import {Icon} from "@iconify/react"


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
  const [mode, setMode] = useState<PaletteMode>('dark')
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

const SnackbarProvider = ({children}: {children: ReactNode}) => {

  const notistackRef = useRef(null)
  return (
    <NotiStackProvider
      ref={notistackRef}
      maxSnack={5}
      preventDuplicate
      autoHideDuration={3000}
      variant="success"
      anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
      action={(snackbarId) => (
        <IconButton size="small" onClick={() => closeSnackbar(snackbarId)}>
          <Box component={Icon} icon="mingcute:close-line" />
        </IconButton>
      )}
    >
      {children}
    </NotiStackProvider>
  )
}

function App() {
  const queryClient = new QueryClient()

  return (
    <StrictMode>
      <MUIWrapper>
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider>
            <RouterProvider router={router} />
          </SnackbarProvider>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </MUIWrapper>
    </StrictMode>
  )
}

export default App
