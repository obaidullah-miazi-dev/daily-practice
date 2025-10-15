import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home";
import Register from "../Components/Register";
import Login from "../Components/Login";
import Orders from "../Components/Orders";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Components/Profile";
import Dashboard from "../Components/Dashboard";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/orders',
                element: <PrivateRoute>
                    <Orders></Orders>
                </PrivateRoute>
            },
            {
                path: '/profile',
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            },
            {
                path:'/dashboard',
                element: <PrivateRoute>
                    <Dashboard></Dashboard>
                </PrivateRoute>
            }
        ]
    }
])