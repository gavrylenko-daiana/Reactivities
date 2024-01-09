import {createBrowserRouter, Navigate, RouteObject} from "react-router-dom";
import ActivityDashboard from "../../feature/activities/dashboard/ActivityDashboard.tsx";
import ActivityDetails from "../../feature/activities/details/ActivityDetails";
import ActivityForm from "../../feature/activities/form/ActivityForm";
import App from "../layout/App";
import HomePage from "../../feature/home/HomePage.tsx";
import TestErrors from "../../feature/errors/TestError.tsx";
import NotFound from "../../feature/errors/NotFound.tsx";
import ServerError from "../../feature/errors/serverError.tsx";
import LoginForm from "../../feature/users/LoginForm.tsx";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'activities', element: <ActivityDashboard />},
            {path: 'activities/:id', element: <ActivityDetails />},
            {path: 'createActivity', element: <ActivityForm key='create' />},
            {path: 'manage/:id', element: <ActivityForm key='manage' />},
            {path: 'login', element: <LoginForm />},
            {path: 'errors', element: <TestErrors />},
            {path: 'not-found', element: <NotFound />},
            {path: 'server-error', element: <ServerError />},
            {path: '*', element: <Navigate replace to='/not-found' />},
        ]
    }
]

export const router = createBrowserRouter(routes);