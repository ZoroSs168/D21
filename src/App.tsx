import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";
import { RouteObject, useRoutes } from "react-router-dom";
import Register from "./pages/Regiter";
import Login from "./pages/Login";
import ADD from "./Crud/Admin";
import LayoutAdmin from "./layouts/LayoutAdmin";
// import List from "./Crud/AdminList";

const routerConfig: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/product/:id", element: <ProductDetail /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/admin", element: <LayoutAdmin /> },
  {path:"add",element:<ADD/>},
  // {path:"list",element:<List/>},
];
function App() {
  const routes = useRoutes(routerConfig);

  return <main>{routes}</main>;
}

export default App;
