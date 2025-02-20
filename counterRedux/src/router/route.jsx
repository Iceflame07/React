import {createBrowserRouter} from "react-router-dom"
import Login from "../auth/Login/Login"
import signUp from "../auth/signUp/signUp"

const router = createBrowserRouter([
    {
        path:"/",
        element: <signUp/>
    },
    {
        path: "/signup",
        element: <signUp/>
    },
    {
        path: "/login",
        element: <Login />
    },
])
export default router