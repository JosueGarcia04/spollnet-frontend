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
import Coordinator from '../pages/coordinator/dashboard/mainCoordinator'
import StudentTable from '../pages/coordinator/students/studentsDashboard';
import PeriodsOfVotesDashboard from '../pages/coordinator/periods/periodsOfVotesDashboard';
import NewsDashboard from '../pages/coordinator/newsDashboard/newsDashboard';
import NotificationDashboard from '../pages/coordinator/notifications/notificationsDashboard';
import MainStatistic from '../pages/coordinator/statistics/mainStatistic';
//student
import SignIn from '../pages/forms/Sign-in'
import Login from '../pages/forms/login'
import VerifyAccount from '../pages/verify/verifyAccount';
import IndexStudent from '../pages/student/IndexStudent';
import Profile from '../pages/student/student_profile'
import ListDeletedStudents from '../pages/coordinator/students/delete&banned/listDeletedStudents';
import ListBannedStudents from '../pages/coordinator/students/delete&banned/listBannedStudents';
import Votacion from '../pages/student/candidates';
import Papel from '../pages/by us/general/papeleta';
import Informacion from '../components/Infocandidatos/Infocandi';
import Vote from '../pages/by us/general/Sectionvote'
import Publica from '../pages/by us/general/public'
//newsletter
import ListDeletedNews from '../components/coordinator/newsDashboard/deletedNews.jsx/listDeletedNews'
// //diseño
// import Editor from '../components/student/indexde';
//periods
import ListDeletedPeriods from '../pages/coordinator/periods/deleted&finally/listDeletedPeriods';
import ListFinallyPeriods from '../pages/coordinator/periods/deleted&finally/listFinallyPeriods';
//consejo
import IndexConsejo from '../pages/consejo/IndexConsejo';
import Solicitudes from '../pages/consejo/solicitudes';


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
            // {
            //     path: "indexde",
            //     element:<Editor/>
            // },
            {
                path: "public",
                element: <Publica />
            },
            {
                path:"mainCoordinator",
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
                path:"candidates",
                element:<Votacion/>
            },
            {
                path:"papeleta",
                element:<Papel/>
            },
            {
                path:"Infocandi",
                element:<Informacion/>
            },
            {
                path:"Sectionvote",
                element:<Vote/>
            },
            {
                path:"listDeletedNews",
                element:<ListDeletedNews/>
            },  
            {
                path:"solicitudes",
                element:<Solicitudes/>
            },
            {
                path:"IndexStudent",
                element:<IndexStudent/>
            },
            {
                path:"IndexConsejo",
                element:<IndexConsejo/>
            },
            {
                path:"listDeletedPeriods",
                element:<ListDeletedPeriods/>
            },
            {
                path: "listFinallyPeriods",
                element: <ListFinallyPeriods/>
            },
            {
                path:"mainStatistic",
                element:<MainStatistic/>
            },
            {
                path: "*",
                element: <NotFound/>
            }
        ]
    }
])