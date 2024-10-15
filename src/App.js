import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import ShimmerUI from "./components/ShimmerUI";

const About = lazy(() => import("./components/About"))
const Contact = lazy(() => import("./components/Contact"))

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/contact",
                element: <Suspense fallback={<ShimmerUI />}><Contact /></Suspense>
            },
            {
                path: "/about",
                element: <Suspense fallback={<ShimmerUI />}><About /></Suspense>
            },
            {
                path: "/restaurant/:restaurantId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <ErrorPage />
    },
    
])

root.render(<RouterProvider router={appRouter} />);