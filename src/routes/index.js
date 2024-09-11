import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../components/Login";
import ForgotPassword from "../components/ForgotPassword";
import Signup from '../components/Signup';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home/>,
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'forgot-password',
                element: <ForgotPassword/>
            },
            {
                path: 'signup',
                element: <Signup/>
            }
        ]
    }
]);

export default router;