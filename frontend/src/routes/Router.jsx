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
import Application from '../pages/coordinator/application/application';
//student
import SignIn from '../pages/forms/Sign-in'
import Login from '../pages/forms/login'
import VerifyAccount from '../pages/verify/verifyAccount';
import Profile from '../pages/student/student_profile'
import ListDeletedStudents from '../pages/coordinator/students/delete&banned/listDeletedStudents';
import ListBannedStudents from '../pages/coordinator/students/delete&banned/listBannedStudents';
import Votacion from '../pages/student/candidates';

import Publish from '../components/consejo/publicaciones';
import Solicitudes from '../pages/student/solicitudes';

//newsletter
import ListDeletedNews from '../components/coordinator/newsDashboard/deletedNews.jsx/listDeletedNews'
//consejo
import IndexConsejo from '../pages/consejo/IndexConsejo';
import Publish from '../pages/consejo/publis';
import Solicitudes from '../pages/consejo/solicitudes';import Informacion from '../pages/student/informacion';


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
                path:"student_profile",
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
                path:"application",
                element:<Application/>
            },
            {
                path:"candidates",
                element:<Votacion/>
            },
            {
                path: "publish",
                element: <Publish />
            },
            {
                path:"solicitudes",
                element:<Solicitudes/>
            }, 
            {
                path:"informacion",
                element:<Informacion/>
            },
            {
                path: "*",
                element: <NotFound/>
            }
        ]
    }
])