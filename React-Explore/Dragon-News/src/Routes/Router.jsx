import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: () => fetch('/news.json')
            }
        ]
    }
])

export default router;