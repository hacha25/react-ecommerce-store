import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineTrash } from "react-icons/hi2";

const Cart = () => {
  const { cart, increaseQnt, decreaseQnt, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.items.reduce((total, item) => total + item.price * item.quantite, 0);

  if (cart.items.length === 0) {
    return (
      <motion.div
        className="container mt-5 text-center min-vh-50 d-flex flex-column justify-content-center align-items-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-muted fw-bold mb-4">Your cart is empty</h2>
        <Link to="/shop" className="btn btn-dark rounded-pill px-5 py-3 shadow-hover transition-custom fs-5">
          Go to Shop
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="container my-5 max-w-4xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold mb-0" style={{ letterSpacing: '-0.5px' }}>Your Cart</h2>
        <button className="btn btn-outline-danger rounded-pill px-4 transition-custom" onClick={clearCart}>
          Clear Cart
        </button>
      </div>

      <div className="row g-4">
        <div className="col-lg-8">
          <AnimatePresence>
            {cart.items.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50, outline: 'none' }}
                transition={{ duration: 0.3 }}
                className="bg-white p-3 rounded-custom shadow-soft mb-3 d-flex align-items-center flex-wrap position-relative border-0"
              >
                <img src={item.images[0]} alt={item.team} className="rounded" style={{ width: "90px", height: "90px", objectFit: "cover" }} />

                <div className="flex-grow-1 ms-3 d-flex flex-column justify-content-between">
                  <div>
                    <Link to={`/product/${item.id}`} className="text-dark fw-bold h5 text-decoration-none hover-scale d-inline-block transition-custom mb-1">{item.team}</Link>
                    <p className="text-muted mb-0 small">{item.price} DH</p>
                  </div>

                  <div className="d-flex align-items-center mt-3 gap-2">
                    <div className="btn-group border rounded-pill overflow-hidden bg-light" role="group">
                      <button className="btn btn-light border-0 px-3 fw-bold text-dark transition-custom" onClick={() => decreaseQnt(item.id)}>-</button>
                      <span className="px-3 d-flex align-items-center fw-semibold bg-white">{item.quantite}</span>
                      <button className="btn btn-light border-0 px-3 fw-bold text-dark transition-custom" onClick={() => increaseQnt(item.id)}>+</button>
                    </div>
                  </div>
                </div>

                <div className="ms-auto d-flex flex-column align-items-end h-100 justify-content-between">
                  <div className="fw-bold fs-5 text-dark mb-3">{(item.price * item.quantite).toFixed(2)} DH</div>
                  <button
                    className="btn btn-sm text-danger hover-scale p-0 border-0 bg-transparent transition-custom"
                    onClick={() => removeFromCart(item.id)}
                    title="Remove item"
                  >
                    <HiOutlineTrash size={22} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="col-lg-4">
          <div className="bg-white p-4 rounded-custom shadow-soft border-0 sticky-top" style={{ top: "100px" }}>
            <h4 className="fw-bold mb-4 border-bottom pb-3">Order Summary</h4>
            <div className="d-flex justify-content-between mb-3 text-muted">
              <span>Subtotal</span>
              <span>{totalPrice.toFixed(2)} DH</span>
            </div>
            <div className="d-flex justify-content-between mb-3 text-muted">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <hr className="my-4 text-muted opacity-25" />
            <div className="d-flex justify-content-between fw-bold fs-4 mb-4 text-dark">
              <span>Total</span>
              <span>{totalPrice.toFixed(2)} DH</span>
            </div>
            <button className="btn btn-dark w-100 py-3 rounded-pill shadow-hover fs-5 transition-custom">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;
