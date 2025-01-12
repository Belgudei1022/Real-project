import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./features/home/pages/Home.jsx";
import SingleProduct from "./features/singleProduct/pages/singleProduct.jsx";
import Dashboard from "./features/admin/page/dashboard.jsx";
import Settings from "./features/admin/page/settings.jsx";
import AddProduct from "./features/admin/page/addProduct.jsx";
import ProductProvider from "./features/admin/componets/ProductProvider.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "product/:id", element: <SingleProduct /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/settings", element: <Settings /> },
  { path: "/addProduct", element: <AddProduct /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  </StrictMode>
);
