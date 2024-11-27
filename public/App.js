import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from "../src/UIComponents/Contactus.js";
import About from "../src/UIComponents/About.js";
import Error from "../src/UIComponents/Error.js";
import Body from "../src/UIComponents/Body.js";
import HeaderComponent from '../src/UIComponents/Header.js';
import Fooditem from "../src/UIComponents/Fooditem.js";
import { Outlet } from "react-router-dom";

const Grocery = lazy(() => import("../src/UIComponents/Grocery.js"));
const Login = lazy(() => import('../src/UIComponents/Login.js'));

const AppLayout = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
    {
      path: "/", // Login is the default route
      element: (
        <Suspense fallback={<div className="flex justify-center font-bold text-2xl mt-96">Loading...</div>}>
          <Login />
        </Suspense>
      ),
      errorElement: <Error />, // Error boundary for the Login route
    },
    {
      path: "/app", // Parent route for the application
      element: <AppLayout />,
      errorElement: <Error />, // Error boundary for the /app route and its children
      children: [
        {
          index: true, // Default child route for "/app"
          element: <Body />, // Body will load when accessing "/app"
          errorElement: <Error />, // Error boundary for the Body route
        },
        {
          path: "contact", // Resolves to "/app/contact"
          element: <ContactUs />,
          errorElement: <Error />, // Error boundary for the ContactUs route
        },
        {
          path: "about", // Resolves to "/app/about"
          element: <About />,
          errorElement: <Error />, // Error boundary for the About route
        },
        {
          path: "restaurants/:resId", // Resolves to "/app/restaurants/:resId"
          element: <Fooditem />,
          errorElement: <Error />, // Error boundary for the Fooditem route
        },
        {
          path: "grocery", // Resolves to "/app/grocery"
          element: (
            <Suspense fallback={<div className="flex justify-center font-bold text-2xl mt-96">Loading...</div>}>
              <Grocery />
            </Suspense>
          ),
          errorElement: <Error />, // Error boundary for the Grocery route
        },
      ],
    },
  ]);
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
