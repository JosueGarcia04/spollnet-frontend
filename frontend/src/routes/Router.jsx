import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import { Index } from '../pages/by us/no logued/Index'
import { Root } from '../pages/Root'
import NotFound from '../pages/not found/404'
import Faq from '../pages/by us/faq'
import AboutUs from '../pages/by us/about us'
import SignIn from '../pages/forms/Sign-in'
import Profile from '../pages/user/profile' 
import Login from '../pages/forms/login'
import { Statistics } from '../pages/statistics/statistics'
import Contact  from '../pages/by us/contact'


export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root /> ,
        children: [
            {
                path: "/",
                element: <Index />
            },
            {
                path:"/faq",
                element:<Faq/>
            },
            {
                path:"/about us",
                element:<AboutUs/>
            },
            {
                path:"Sign-in",
                element:<SignIn/>
            },
            {
                path:"profile",
                element:<Profile/>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "statistics",
                element:<Statistics/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path: "*",
                element: <NotFound/>
            }
        ]
    }
])