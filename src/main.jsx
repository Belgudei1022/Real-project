import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./features/home/pages/Home.jsx";
import SingleProduct from "./features/singleProduct/pages/singleProduct.jsx";
import LoginForm from "./features/auth/pages/login-form.jsx";
import UserInformation from "./features/userInformation/pages/userInformation.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "product/:id", element: <SingleProduct /> },
  { path: "login", element: <LoginForm /> },
  { path: "user", element: <UserInformation /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>
);
