import { Container } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import { useState } from "react";

const App = () => {
  const [productsInCart, setProductsInCart] = useState([]);
  console.log(productsInCart);
  return (
    <Container maxWidth="lg">
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<HomePage setProductsInCart={setProductsInCart} />}
        />
        <Route path="/cart" element={<CartPage products={productsInCart} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
};

export default App;
