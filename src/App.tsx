import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Regiter";
import Login from "./pages/Login";



function App() {
  

  return <main>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin"  >
           
        </Route>
      </Routes>
  </main>;
}

export default App;
