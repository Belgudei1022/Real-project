import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./features/home/pages/Home.jsx";
import ProductProvider from "./features/admin/componets/ProductProvider.jsx";
import SingleProduct from "./features/singleProduct/pages/singleProduct.jsx";
import LoginForm from "./features/auth/pages/login-form.jsx";
import SignUp from "./features/auth/pages/signup-form.jsx";
import UserInformation from "./features/userInformation/pages/userInformation.jsx";
import Cart from "./features/cart/pages/cart.jsx";
import Order from "./features/order/pages/order.jsx";
import WishList from "./features/wishList/pages/wishList.jsx";
import Notification from "./features/notification/pages/notification.jsx";
import Dashboard from "./features/admin/page/dashboard.jsx";
import AddProduct from "./features/admin/page/addProduct.jsx";
import MobileCategory from "./shared/components/mobileCategory.jsx";
import Settings from "./features/admin/page/settings.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/product/:id", element: <SingleProduct /> },
  { path: "/login", element: <LoginForm /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/userinformation", element: <UserInformation /> },
  { path: "/cart", element: <Cart /> },
  { path: "/order", element: <Order /> },
  { path: "/wishlist", element: <WishList /> },
  { path: "/notification", element: <Notification /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/addProduct", element: <AddProduct /> },
  { path: "/settings", element: <Settings /> },
  {
    path: "/menu",
    element: <MobileCategory />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  </StrictMode>
);
