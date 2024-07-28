import { useRoutes } from "react-router-dom";
import Dashboard from "../components/Dashboard";    
import Analysis from "../components/Analysis";
import Auth from "../components/Auth";
import React from "react";

let JobRoutes = () => {
    let JobMateRoutes = useRoutes([
        {
            path: "/",
            element: <Dashboard />,
        },
        {
            path: "/analysis",
            element: <Analysis />,
        },
        {
            path: "/auth",
            element: <Auth />,
        },
    ]);

    return JobMateRoutes;


}

export default JobRoutes;