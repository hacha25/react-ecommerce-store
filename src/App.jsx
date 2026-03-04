import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ProductDetails from "./components/ProductDetails"
import CartProvider from './context/CartContext.jsx'
import { ToastContainer } from "react-toastify"


function App() {

  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="light"
      />
    </CartProvider>
  )

}

export default App
