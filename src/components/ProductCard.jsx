import React from 'react'
import { Link } from 'react-router-dom'
import "./product-card.css"
import { GoArrowRight } from "react-icons/go";
import { motion } from 'framer-motion'

function ProductCard({ id, team, price, images }) {
  return (

    <motion.div
      className='mb-4'
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="card h-100 shadow-soft border-0 rounded-custom overflow-hidden">
        <img
          src={images[0]}
          alt={team}
          className='card-img-top'
          style={{ height: '250px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className='card-title fw-bold text-dark mb-3' style={{ fontSize: '1.1rem' }}>{team}</h5>
          <div className="d-flex justify-content-between align-items-center mt-auto">
            <p className="card-text text-muted mb-0 fw-semibold">{price} DH</p>
            <Link to={`/product/${id}`} className='btn btn-dark rounded-pill px-3 shadow-hover transition-custom d-flex align-items-center gap-2' style={{ fontSize: '0.9rem' }}>
              View details <GoArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>

  )
}

export default ProductCard