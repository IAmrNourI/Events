import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from './Components/Register/Register';
import Layout from './Components/Layout/Layout';
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {


  let route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // { index: true, element: <Home /> },
      // { path: "home", element: <Home /> }, 
      // { path: "about", element: <About /> },
      // { path: "portfolio", element: <Services /> },
      // { path: "products", element: <Products /> },
      // { path: "contact", element: <Contact /> },
      // { path: "card-details", element: <CardDetails /> },
      //auth
      { path: "auth/register", element: <Register /> },
      // { path: "auth/verifyemail", element: <VerifyEmail /> },
      // { path: "auth/sendotp", element: <SendOtp /> },
      // { path: "auth/newpassword", element: <NewPassword /> },
      // { path: "upload", element: <ForSlide /> },
      // { path: "*", element: <Notfound /> },
    ],
  },

  // {
  //   path: "/admin", element: <Admin />,
  //   children: [
  //     { path: "product-admin", element: <ProductsAdmin /> },
  //     { path: "portfolio-admin", element: <PortfolioAdmin /> },
  //     { path: "about-admin", element: <AboutAdmin /> },
  //     { path: "details-admin", element: <DetailsAdmin /> },
  //     { path: "slide-admin", element: <SlideAdmin /> },
  //     { path: "keyword-admin", element: <KeywordAdmin /> },
  //     { path: "addproduct", element: <AddProdcut /> },
  //     { path: "editcard", element: <EditCart /> },
  //     { path: "addslide", element: <AddSlide /> },
  //     { path: "editslide", element: <EditSlide /> },
  //   ],
  // },

]);

  return (
    <>
      {/* <Toaster /> */}
      <RouterProvider router={route} />
    </>
  )
}

export default App
