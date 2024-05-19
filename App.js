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

import React ,{lazy ,Suspense} from "react";
import ReactDOM from "react-dom/client";
// default import
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import RestrauntMenu from "./src/components/RestrauntMenu";
import Profile from "./src/components/Profile";
import ProfileClass from "./src/components/ProfileClass";
import Shimmer from "./src/components/Shimmer";
// import Instamart from "./src/components/Instamart";
import { Provider } from "react-redux";
import store from "./src/utils/store";
import Cart from "./src/components/Cart";

const Instamart  = lazy(()=>import('./src/components/Instamart'))
// upon on on-demand loading -> upon render -> suspend loading


const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [{ path: "profile", element: <Profile /> }],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/instamart",
        element: <Suspense fallback={<Shimmer />}><Instamart /></Suspense>,
      },          
      {
        path: "/cart",
        element: <Suspense fallback={<Shimmer />}><Cart /></Suspense>,
      },
      {
        path: "/restaurant/:resId",
        element: <RestrauntMenu />,
      },

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
