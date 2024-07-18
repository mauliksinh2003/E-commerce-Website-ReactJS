import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import Footer from "./Components/Footer/Footer";
import Products from "./Pages/Products/Products";
import CategoryProduct from "./Components/CategoryProduct/CategoryProduct";
import Cart from "./Pages/Cart/Cart";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Login from "./Pages/LogIn/Login";
import Logout from "./Pages/Logout/Logout";


const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/product/:id" exact element={<SingleProduct/>} />
          <Route path="/products" exact element={<Products/>} />
          <Route path="/categories/:name" exact element={<CategoryProduct/>} />
          <Route path="/cart" exact element={<Cart/>} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/logout" exact element={<Logout/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="*" element={<h1 style={{color:"red"}}>404 ! Page Not Found</h1>} />
        </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
  