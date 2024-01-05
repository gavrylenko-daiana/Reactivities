import { createBrowserRouter, RouteObject } from "react-router-dom";
import ActivityDashboard from "../../feature/activities/dashboard/ActivityDashboard.tsx";
import ActivityDetails from "../../feature/activities/details/ActivityDetails";
import ActivityForm from "../../feature/activities/form/ActivityForm";
import App from "../layout/App";
import HomePage from "../../feature/home/HomePage.tsx";

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
        ]
    }
]

export const router = createBrowserRouter(routes);