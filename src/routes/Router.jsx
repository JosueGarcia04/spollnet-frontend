import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import { Index } from "../pages/Index";
import { Root } from "../pages/Root";
import NavBar from "../components/navBar";

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
        ]
    }
])