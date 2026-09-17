import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import User from "../pages/User";
import Repo from "../pages/Repo";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/user/:username",
                element: <User />,
            },
            {
                path: "/repo/:username/:repoName",
                element: <Repo />,
            },
        ],
    },
]);