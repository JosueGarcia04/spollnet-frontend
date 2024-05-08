import { createBrowserRouter } from "react-router-dom";

import { Index } from "../pages/Index";
import { Root } from "../pages/Root";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Root /> ,
        children: [
            {
                path: "/",
                element: <Index />
            }
        ]
    }
])