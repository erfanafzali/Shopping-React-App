import { Routes, Route, Navigate } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";
import CheckoutPage from "./pages/CheckoutPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductsProvider from "./context/ProductContext";

function App() {
  return (
    <ProductsProvider>
      <div className="w-full container mx-auto transition-all duration-300  ">
        <Routes>
          <Route index element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </ProductsProvider>
  );
}

export default App;
