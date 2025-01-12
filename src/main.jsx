import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./features/home/pages/Home.jsx";
import SingleProduct from "./features/singleProduct/pages/singleProduct.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "product/:id", element: <SingleProduct /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
