import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import { Index } from "../pages/Index";
import { Root } from "../pages/Root";
import NavBar from "../components/navBar";
import NotFound from "../pages/404";
import Footer from "../components/footer";
import Example from "../pages/developers";


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
                path: "/navBar",
                element: <NavBar/>
            },
            {
                path: "/404",
                element:<NotFound/>
            },
            {
                path:"/footer",
                element:<Footer/>
            },
            {
                path:"/developers",
                element:<Example/>
            }
        ]
    }
])