import Admin from './pages/Admin';
import Registr from './pages/Registr';
import Auth from './pages/Auth';
import Basic from './pages/Basic';
import YaYjeAuth from './pages/YaYjeAuth';

export const authRoutes =[
    {
        path:'/admin',
        Component:Admin
    },
    {
        path:'/yaauth',
        Component:YaYjeAuth
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