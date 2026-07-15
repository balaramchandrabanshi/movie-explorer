import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Hero from './components/Hero.jsx'
import MovieDetails from './pages/MovieDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/hero",
    element: <hero />
  },
  {
    path: "/movie/:id",
    element: <MovieDetails />
  },
  {
    path: "*",
    element: <h1>Page Not Found</h1>
  }
])





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
