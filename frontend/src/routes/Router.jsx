import React from 'react';
//router frontend
import { createBrowserRouter } from 'react-router-dom'
//index no logued
import { Index } from '../pages/by us/no logued/Index'
//route
import { Root } from '../pages/Root'
//general
import NotFound from '../pages/not found/404'
import ProtectedRoute from '../components/protect-route';
import News from '../pages/by us/general/news'
//coordinador
import Coordinator from '../pages/coordinator/dashboard/mainCoordinator'
import StudentTable from '../pages/coordinator/students/studentsDashboard';
import PeriodsOfVotesDashboard from '../pages/coordinator/periods/periodsOfVotesDashboard';
import NewsDashboard from '../pages/coordinator/newsDashboard/newsDashboard';
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
import Editor from '../components/student/indexde';
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
            {
                path: "indexde",
                element:<Editor/>
            },
            {
                path: "public",
                element: <ProtectedRoute component={Publica} allowedRoles={['student']} />
            },
            {
                path: "mainCoordinator",
                element: <ProtectedRoute component={Coordinator} allowedRoles={['coordinador']} />
            },
            {
                path: "studentsTable",
                element: <ProtectedRoute component={StudentTable} allowedRoles={['coordinador']} />
            },
            {
                path:"listDeletedStudents",
                element: <ProtectedRoute component={ListDeletedStudents} allowedRoles={['coordinador']} />
            },
            {
                path:"listBannedStudents",
                element: <ProtectedRoute component={ListBannedStudents} allowedRoles={['coordinador']} />
            },
            {
                path:"periodsOfVotesDashboard",
                element: <ProtectedRoute component={PeriodsOfVotesDashboard} allowedRoles={['coordinador']} />
            },
            {
                path:"newsDashboard",
                element: <ProtectedRoute component={NewsDashboard} allowedRoles={['coordinador']} />
            },
            {
                path:"candidates",
                element: <ProtectedRoute component={Votacion} allowedRoles={['student']} />
            },
            {
                path:"papeleta",
                element: <ProtectedRoute component={Papel} allowedRoles={['student']} />
            },
            {
                path:"Infocandi",
                element: <ProtectedRoute component={Informacion} allowedRoles={['student']} />
            },
            {
                path:"Sectionvote",
                element: <ProtectedRoute component={Vote} allowedRoles={['student']} />
            },
            {
                path:"listDeletedNews",
                element: <ProtectedRoute component={ListDeletedNews} allowedRoles={['coordinador']} />
            },  
            {
                path:"solicitudes",
                element: <ProtectedRoute component={Solicitudes} allowedRoles={['consejal']} />
            },
            {
                path:"IndexStudent",
                element: <ProtectedRoute component={IndexStudent} allowedRoles={['student']} />
            },
            {
                path:"IndexConsejo",
                element: <ProtectedRoute component={IndexConsejo} allowedRoles={['consejal']} />
            },
            {
                path:"listDeletedPeriods",
                element: <ProtectedRoute component={ListDeletedPeriods} allowedRoles={['coordinador']} />
            },
            {
                path: "listFinallyPeriods",
                element: <ProtectedRoute component={ListFinallyPeriods} allowedRoles={['coordinador']} />
            },
            {
                path:"mainStatistic",
                element: <ProtectedRoute component={MainStatistic} allowedRoles={['coordinador']} />
            },
            {
                path: "*",
                element: <NotFound/>
            }
        ]
    }
])