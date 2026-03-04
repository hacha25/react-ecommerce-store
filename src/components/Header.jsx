import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useCart } from '../context/CartContext';
import '../index.css'

function Header() {
    const { cart } = useCart()
    const [active, setActive] = useState("home")
    const totalQnt = cart.items.reduce((c, item) => c + item.quantite, 0)


    return (

        <nav className="navbar navbar-expand-md glass-nav sticky-top shadow-sm py-3 transition-custom">

            <div className="container">

                <Link to='/' className='navbar-brand' onClick={() => setActive('home')}>
                    <img src="/logo.png" alt="brand" className='' width='45px' style={{ borderRadius: '8px' }} />
                </Link>

                <button
                    className="navbar-toggler border-0 shadow-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id='navbarNav'>
                    <div className="m-auto">
                        <ul className="navbar-nav gap-3">
                            <li className="nav-item">
                                <Link
                                    to='/'
                                    onClick={() => setActive('home')}
                                    className={`nav-link nav-link-custom ${active === 'home' ? "nav-active" : ""}`}

                                >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to='/shop'
                                    className={`nav-link nav-link-custom ${active === 'shop' ? "nav-active" : ""}`}

                                    onClick={() => setActive('shop')}
                                >Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to='/'
                                    className={`nav-link nav-link-custom ${active === 'contact' ? "nav-active" : ""}`}
                                    onClick={() => setActive('contact')}
                                >Contact Us</Link>
                            </li>

                        </ul>
                    </div>

                    <div>

                        <Link
                            to='/cart'
                            className='position-relative ms-3 text-dark transition-custom'
                            onClick={() => setActive("")}
                            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <HiOutlineShoppingBag size={28} className='text-dark transition-custom hover-scale' />
                            {totalQnt > 0 && (
                                <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark shadow-sm' style={{ fontSize: '0.7rem' }}>
                                    {totalQnt}
                                </span>
                            )}
                        </Link>

                    </div>

                </div>
            </div>
        </nav>


    )
}

export default Header
