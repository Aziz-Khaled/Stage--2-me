import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./Components/Admin/Admin";
import AllComponents from "./Components/newHome/AllComponents";
import Login from "./Components/Admin/Login";
import Products from "./Components/newHome/Products";
import Users from "./Components/Admin/Users";
import CrudProducts from "./Components/Admin/CrudProducts";
import ProductDetails from "./Components/newHome/ProductDetails";
import Footer from "./Components/newHome/Footer";
import Purchase from './Components/newHome/Purchase'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllComponents />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminPanel" element={<Admin />} />
        <Route path="/Templates" element={<Products />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/crudProducts" element={<CrudProducts />} />
        <Route path="/Details/:id" element={<ProductDetails />} />
        <Route path="/Purchase/:id" element = {<Purchase />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
