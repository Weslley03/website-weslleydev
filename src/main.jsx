import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalStyled } from './GlobalStyled.jsx'
import Home from './pages/Home/Home.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Contato from './pages/Contato/Contato.jsx'
import ProjectOverviewPage from './pages/SelectedProject/ProjectOverviewPage.jsx'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/weslley-projects', element: <Projects /> },
  { path: '/project-overview', element: <ProjectOverviewPage /> },
  { path: '/contato', element: <Contato /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
