import { products } from "../data/products"
import ProductCard from "../components/ProductCard"
import HeroCarousel from '../components/HeroCarousel'
import "./home.css"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4 }
  }
}

function Home() {

  return (

    <motion.div
      className='container mt-4'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroCarousel />
      <h2 className='text-center mb-5 mt-5 fw-bold' style={{ color: 'var(--text-main)', letterSpacing: '-0.5px' }}>
        Shop the Latest Football Jerseys
      </h2>
      <motion.div
        className="row justify-content-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {
          products.slice(0, 8).map((item) => {
            return (
              <motion.div key={item.id} variants={itemVariants} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
                <ProductCard {...item} />
              </motion.div>
            )
          })
        }
      </motion.div>
      <div className="text-center mt-4 mb-5">
        <Link to='/shop' className='btn btn-outline-dark rounded-pill px-5 py-2 shadow-hover transition-custom fs-5'>
          See All Items
        </Link>
      </div>
    </motion.div>

  )
}

export default Home