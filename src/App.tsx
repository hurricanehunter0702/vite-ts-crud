/* eslint-disable perfectionist/sort-imports */
import * as React from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'

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

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark'
    }
  })
  const queryClient = new QueryClient()

  return (
    <React.StrictMode>
      <ThemeProvider theme={darkTheme}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ThemeProvider>
    </React.StrictMode>
  )
}

export default App
