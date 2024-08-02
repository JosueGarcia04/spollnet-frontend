import React from 'react';
//router frontend
import { createBrowserRouter } from 'react-router-dom'
//index no logued
import { Index } from '../pages/by us/no logued/Index'
//route
import { Root } from '../pages/Root'
//general
import NotFound from '../pages/not found/404'
import News from '../pages/by us/general/news'
//coordinador
import Coordinator from '../pages/coordinator/dashboard/main'
import StudentTable from '../pages/coordinator/students/studentsDashboard';
import PeriodsOfVotesDashboard from '../pages/coordinator/periods/periodsOfVotesDashboard';
import NewsDashboard from '../pages/coordinator/newsDashboard/newsDashboard';
import NotificationDashboard from '../pages/coordinator/notifications/notificationsDashboard';
//student
import SignIn from '../pages/forms/Sign-in'
import Login from '../pages/forms/login'
import VerifyAccount from '../pages/verify/verifyAccount';
import Profile from '../pages/student/profile'
import ListDeletedStudents from '../pages/coordinator/students/delete&banned/listDeletedStudents';
import ListBannedStudents from '../pages/coordinator/students/delete&banned/listBannedStudents';


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
                path: "verifyAccount",
                element:<VerifyAccount/>
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
                path:"listDeletedStudents",
                element:<ListDeletedStudents/>
            },
            {
                path:"listBannedStudents",
                element:<ListBannedStudents/>
            },
            {
                path:"periodsOfVotesDashboard",
                element:<PeriodsOfVotesDashboard/>
            },
            {
                path:"newsDashboard",
                element:<NewsDashboard/>
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