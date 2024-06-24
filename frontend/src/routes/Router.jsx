import React from 'react';
//router frontend
import { createBrowserRouter } from 'react-router-dom'
//index no logued
import { Index } from '../pages/by us/no logued/Index'
//route
import { Root } from '../pages/Root'
//general
import NotFound from '../pages/not found/404'
import Faq from '../pages/by us/general/faq'
import AboutUs from '../pages/by us/general/about us'
import Contact  from '../pages/by us/general/contact'
import News from '../pages/by us/general/news'
//coordinador
import Coordinator from '../pages/coordinator/dashboard/main'
import StudentTable from '../pages/coordinator/students/studentsDashboard';
import PeriodsOfVotesDashboard from '../pages/coordinator/periods/periodsOfVotesDashboard';
import NotificationDashboard from '../pages/coordinator/notifications/notificationsDashboard';
//student
import SignIn from '../pages/forms/Sign-in'
import Login from '../pages/forms/login'
import Profile from '../pages/student/profile'


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
                path:"contact",
                element:<Contact/>
            },
            {
                path:"news",
                element:<News/>
            },
            {
                path:"main",
                element:<Coordinator/>
            },
            {
                path:"studentsTable",
                element:<StudentTable/>
            },
            {
                path:"periodsOfVotesDashboard",
                element:<PeriodsOfVotesDashboard/>
            },
            {
                path:"notificationsDashboard",
                element:<NotificationDashboard/>
            },
            {
                path: "*",
                element: <NotFound/>
            }
        ]
    }
])