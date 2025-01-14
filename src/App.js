import React from "react";
import Layout from "./Components/Common/layout";
import HomePage from "./Pages/Home/Index";
// import Detail from "./Pages/Detail/detail";
import AllProducts from "./Pages/All Products/allProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter basename="/emoji-app">
      <Routes>
        <Route exact path="/emoji-app" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="/:slug" element={<Detail />} /> */}
          <Route path="/all-products" element={<AllProducts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
