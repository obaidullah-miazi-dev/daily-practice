import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import UserDetails from './components/UserDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App
  },
  {
    path: '/users/:id',
    loader: ({params})=> fetch(`http://localhost:3000/users/${params.id}`),
    Component: UserDetails
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
