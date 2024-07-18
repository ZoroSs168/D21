// routes.tsx
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ADD from "src/Crud/Admin";
import Login from "./Login";
import Register from "./Regiter";
import ProductDetail from "./ProductDetail";
import List from "src/Crud/AdminList";
import Update from "src/Crud/Update";
import LayoutAdmin from "src/layouts/LayoutAdmin";



const listLoader = async () => {
  const response = await fetch("http://localhost:3000/products");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};


const routes = createBrowserRouter([
  
  { path: "/", element: <App /> },
  { path: "add", element: <ADD /> },
  { path: "/list", element: <List />, loader: listLoader },
  { path:"/edit/:id",element:<Update/>},
  { path: "/login", element: <Login /> },
  { path: "/product/:id", element: <ProductDetail/> },
  { path: "/register", element: <Register /> },
  { path: "/admin", element: <LayoutAdmin />, loader: listLoader },

]);

export default routes;
