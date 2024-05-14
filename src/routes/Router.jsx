import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import { Index } from "../pages/Index";
import { Root } from "../pages/Root";
import NotFound from "../pages/404";
import Example from "../pages/developers";
import NoNotifications from '../pages/no-notifications';
import Faq from '../pages/faq';
import AboutUs from '../pages/about us';

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
                path: "/404",
                element:<NotFound/>
            },
            {
                path:"/developers",
                element:<Example/>
            },
            {
                path:"/no-notifications",
                element:<NoNotifications/>
            },
            {
                path:"/faq",
                element:<Faq/>
            },
            {
                path:"/about us",
                element:<AboutUs/>
            }
        ]
    }
])