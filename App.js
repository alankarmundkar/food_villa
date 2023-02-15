/*
 * HMR : Hot Module Replacement
 * File Watcher algorithm - C++
 * Bundling
 * Minify
 * Cleaning our code
 * Dev  and Production Build
 * Super Fasr build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatiable with older version of browser
 * HTTPS on dev
 * Port Number
 * Consistent hashing algorithm
 * Zero Config
 *
 *
 * Transitive Dependencies
 * Dependency Tree
 */

/**
            Header 
            Body
                -Search Bar
                - Restaurant List
                    -Restaurant Card
                     - Iamge
                     -Name
                     -Rating
                     -Cusines

            Footer
                -links
                -CopyRight

         */

// Named import
// import {Title } from './src/components/Header'
// import * as Obj from './src/components/Header'
/**
     Header
        - Logo(Title)
        - Nav Items(Right Side)
        - Cart
     Body 
        - Search bar
        - RestrauntList
          - RestaurantCard (many cards)
              - Image
              - Name
              - Rating
              - Cusines
     Footer
      - links
      - Copyright
    
    */

import React from "react";
import ReactDOM from "react-dom/client";
// default import
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import RestrauntMenu from "./src/components/RestrauntMenu";
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement : <Error />,
    children :[
      {
        path :'/',
        element : <Body />
      },
      {
        path :'/about',
        element : <About />
      },
      {
        path :'/contact',
        element : <Contact />
      },
      {
        path :'/restaurant/:id',
        element : <RestrauntMenu />
      }
    ]
    
  },
  {
    path: "/about",
    element: <About />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( <RouterProvider router={appRouter}  />);
