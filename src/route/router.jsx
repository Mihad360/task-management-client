import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import Register from "../authentication/Register";
import Login from "../authentication/Login";
import Dashboard from "../dashboard/Dashboard";
import Todolist from "../dashboard/Todolist";
import Createtask from "../dashboard/Createtask";
import Privateroute from "./Privateroute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Privateroute><Dashboard></Dashboard></Privateroute>,
        children: [
            {
                path: '/dashboard/todolist',
                element: <Privateroute><Todolist></Todolist></Privateroute>
            },
            {
                path: '/dashboard/createtask',
                element: <Createtask></Createtask>
            }
        ]
    }
]);

export default router;