import Admin from './pages/Admin';
import Registr from './pages/Registr';
import Auth from './pages/Auth';
import Basic from './pages/Basic';

export const authRoutes =[
    {
        path:'/admin',
        Component:Admin
    },
]

export const publicRoutes =[
    {
        path:'/registration',
        Component: Registr
    },
    {
        path:'/autorization',
        Component: Auth
    },
    {
        path:'/',
        Component: Basic
    },
]