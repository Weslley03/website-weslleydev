import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalStyled } from './GlobalStyled.jsx'
import Home from './Pages/Home/Home.jsx'
import WfNews from './Pages/WfNews/WfNews.jsx'
import WebSockets from './Pages/WebSockets/WebSockets.jsx'
import VideoStreaming from './Pages/VideoStreaming/VideoStreaming.jsx'
import CrudFullStack from './Pages/CrudFullStack/CrudFullStack.jsx'
import Contato from './Pages/Contato/Contato.jsx'

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
    path: '/websockets',
    element: <WebSockets />
  },

  {
    path: '/video-streaming',
    element: <VideoStreaming />
  },

  {
    path: '/crudfullstack',
    element: <CrudFullStack />
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
