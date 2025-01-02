import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalStyled } from './GlobalStyled.jsx'
import Home from './Pages/Home/Home.jsx'
import WfNews from './Pages/WfNews/WfNews.jsx'
import Contato from './Pages/Contato/Contato.jsx'
import Lhotse from './Pages/Lhotse/Lhotse.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },

  {
    path: '/wfnews',
    element: <WfNews />
  },

  {
    path: '/lhotse-learning-english',
    element: <Lhotse />
  },
  
  {
    path: '/contato',
    element: <Contato />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
