import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Header from './components/Header.jsx';
import Banner from './components/Banner.jsx';
import Home from './components/Home.jsx';
import Users from './components/Users.jsx';
import Users2 from './components/Users2.jsx';
import UsersDetails from './components/UsersDetails.jsx';

  const userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

  const router = createBrowserRouter([
    {
      path:'/',
      Component: Header,
      children:[
        {index:true , Component: Home},
        {path:'banner', Component:Banner},
        {path:'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'), 
        Component: Users},
        {
          path: 'users2',
          element: <Suspense fallback={<p>loading....</p>}>
            <Users2 userPromise={userPromise}></Users2>
          </Suspense>
        },
        {path:'users/:userId',
          loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component:UsersDetails}
      ]
    }
  ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
