import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from "../data/products"
import './product-detail.css'
import { MdAddShoppingCart } from "react-icons/md";
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion'

function ProductDetails() {



  const { id } = useParams()
  const product = products.find((pro) => pro.id === parseInt(id))

  const { addToCart } = useCart()

  const [mainImg, setMainImg] = useState(product.images[0])
  const sizes = ["S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState("M");



  return (
    <motion.div
      className="product-detail container my-5 p-4 bg-white shadow-soft rounded-custom"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >

      <div className="product-images">
        <motion.img
          key={mainImg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          src={mainImg}
          alt="not found"
          className='main-image rounded-custom shadow-sm mb-3'
        />
        <div className="images d-flex gap-2 mt-2">
          {
            product.images.map((img, index) => {
              return (
                <img
                  key={index}
                  src={img}
                  className={`rounded ${mainImg === img ? 'border border-dark border-2 opacity-100' : 'opacity-50 hover-opacity-100 transition-custom'}`}
                  alt='not found'
                  onClick={() => setMainImg(img)}
                  style={{ cursor: 'pointer', width: '80px', height: '80px', objectFit: 'cover' }}
                />
              )
            })
          }
        </div>
      </div>

      <div className='product-info ps-md-4'>

        <h2 className='fw-bold mb-4'>{product.team}</h2>

        <div className="info description mb-3">
          <h5 className='text-muted'>About</h5>
          <p className='text-dark' style={{ lineHeight: '1.6' }}>{product.description}</p>
        </div>

        <div className="info season mb-3">
          <h5 className='text-muted'>Season</h5>
          <p className='fw-semibold'>{product.season}</p>
        </div>

        <div className='info price mb-4'>
          <h5 className='text-muted'>Price</h5>
          <p className='fs-3 fw-bold text-dark'>{product.price} DH</p>
        </div>


        <div className="info size mb-4">
          <h5 className='text-muted mb-2'>Select Size</h5>
          <div className="options d-flex gap-2">
            {sizes.map(size => (
              <button
                key={size}
                className={`btn btn-outline-dark rounded-custom px-4 py-2 transition-custom ${selectedSize === size ? "active bg-dark text-white" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <motion.button
          className='btn btn-dark w-100 py-3 rounded-pill shadow-hover d-flex align-items-center justify-content-center gap-2 fs-5 mt-4 transition-custom'
          onClick={() => addToCart(product)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <MdAddShoppingCart size={24} /> Add to Cart
        </motion.button>
      </div>


    </motion.div>
  )
}

export default ProductDetails