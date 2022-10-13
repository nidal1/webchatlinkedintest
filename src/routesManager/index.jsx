import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import WelcomePage from '../pages/welcome'
import ChatPage from '../pages/chat'
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function index() {
  const user = useSelector((state) => state.user.value);
  const router = createBrowserRouter([
    {
      path: "/welcome",
      element: <WelcomePage />,
    },
    {
      path: "/",
      element: user ? <ChatPage />  : <Navigate to="/welcome" replace={true} />,
    },
  ]);
  return <RouterProvider router={router} />
}

export default index;
