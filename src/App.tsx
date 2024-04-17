import * as React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Home from './pages/Home.tsx'
import Add from './pages/Add.tsx'
import Edit from './pages/Edit.tsx'
import './App.css'

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
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
