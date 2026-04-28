import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalStyled } from './GlobalStyled.jsx'
import Home from './pages/Home/Home.jsx'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
