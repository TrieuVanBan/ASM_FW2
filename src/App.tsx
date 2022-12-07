import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import CategoryAdd from "./components/Category-Add";
import CategoryEdit from "./components/Category-Edit";
import Product from "./components/product";
import ProductAdd from "./components/product-add";
import ProductEdit from "./components/product-edit";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutWebsite from "./layouts/LayoutWebsite";
import Detail from "./page/detail";
import Home from "./page/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<h1>Dashboard</h1>} />
          <Route path="categorys" element={<Category />} />
          <Route path="categorys/add" element={<CategoryAdd />} />
          <Route path="categorys/edit/:id" element={<CategoryEdit />} />
          <Route path="products" element={<Product />} />
          <Route path="products/add" element={<ProductAdd />} />
          <Route path="products/edit/:id" element={<ProductEdit />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
