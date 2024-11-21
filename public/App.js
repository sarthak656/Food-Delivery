import React, { lazy, Suspense } from "react";
import  ReactDOM  from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from "../src/UIComponents/Contactus.js";
import About from "../src/UIComponents/About.js";
import Error from "../src/UIComponents/Error.js";
import Body from "../src/UIComponents/Body.js";
import { createBrowserRouter,  RouterProvider} from "react-router-dom";
import HeaderComponent from '../src/UIComponents/Header.js';
import { Outlet } from 'react-router-dom';
import Restaurants from "../src/UIComponents/Restaurants.js";
import Login from "../src/UIComponents/Login.js";


//Lazy Loading or 
//chunking 
//code splitting 
//Dynamic Bundling
//on Demand Loading
//dynamic Import

const Grocery = lazy(() => import("../src/UIComponents/Grocery.js"));


const AppLayout = () => {
    return (
    <div className="App">
       <HeaderComponent />
       <Outlet />  {/*all the childrens go inside outlet,this is how load we load the children routes */}
    </div>
    );
    }

   const appRouter = createBrowserRouter([
    {
            path: "/login",
            element: <Login />
        
    },
    {
        path: "/",
        element: <AppLayout />,
         children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/restaurants/:resId",
                element: <Restaurants />
            },
            {
                path:'/grocery',
                element: <Suspense fallback={<div>Loading....</div>}><Grocery /></Suspense>
            }
    ],
    errorElement: <Error />,
}
   ])
 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<RouterProvider router={appRouter} />);