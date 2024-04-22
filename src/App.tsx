/* eslint-disable perfectionist/sort-imports */
import * as React from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

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
  const queryClient = new QueryClient()
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </React.StrictMode>
  )
}

export default App
