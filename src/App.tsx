import { useRoutes } from "react-router-dom";
import HomePage from "src/pages/HomePage";
import ProductDetai from "src/pages/ProductDetai";
import Register from "src/pages/Register";
import LayoutAdmin from "src/layouts/LayoutAdmin";
import Login from "src/pages/Login";

function App() {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/product/:id", element:<ProductDetai />},
    {path: "/register", element: <Register />},
    {path: "/login", element: <Login />},
    {path: "/admin", element: <LayoutAdmin />}
    ]);
  return element;
}
export default App
