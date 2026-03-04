// import "./home.css"
import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { motion, AnimatePresence } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  exit: { y: -20, opacity: 0, transition: { duration: 0.2 } }
}

const Shop = () => {
  const [category, setCategory] = useState("All");

  // Filter products by category
  const filteredProducts = category === "All"
    ? products
    : products.filter(p => p.category === category);

  const categories = [
    "All",
    "Premier League",
    "La Liga",
    "Bundesliga",
    "Primeira Liga",
    "Ligue 1",
    "UCL",
    "National Team"
  ];

  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-center mb-5 mt-5 fw-bold" style={{ color: 'var(--text-main)', letterSpacing: '-0.5px' }}>
        Shop Jerseys
      </h2>


      <div className='d-flex flex-wrap justify-content-center gap-2 mb-5'>
        {
          categories.map((cat) => {
            return (
              <button
                key={cat}
                className={`btn rounded-pill px-4 py-2 transition-custom ${category === cat ? "btn-dark shadow-soft" : "btn-light border text-muted hover-scale"}`}
                onClick={() => setCategory(cat)}
              >{cat}</button>
            )
          })
        }
      </div>

      <motion.div
        className="row g-4 justify-content-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={category}
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map(product => (
            <motion.div key={product.id} variants={itemVariants} layout className="col-3 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
              <ProductCard {...product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Shop;
