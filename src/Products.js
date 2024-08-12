import React from 'react';
import './About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Macroons from './images/product1.jpg';
import Cakes from './images/product2.jpg';
import Croisants from './images/product3.jpg';
import Cookies from './images/product5.jpg';
import Eclairs from './images/product4.jpg';
import Cupcakes from './images/product6.jpg';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <>
            <div className='container page'>
                <div className='products-container'>
                    <h2 className='product-title'>
                        What We Offer
                    </h2>
                    <div className='products-details p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg'>
                        <div className='product'>
                            <img src={Macroons} />
                            <h3 className='name'>Macarons</h3>
                        </div>
                        <div className='product'>
                            <img src={Cakes} />
                            <h3 className='name'>Cakes</h3>
                        </div>
                        <div className='product'>
                            <img src={Croisants} />
                            <h3 className='name'>Croissants</h3>
                        </div>
                        <div className='product'>
                            <img src={Eclairs} />
                            <h3 className='name'>Eclairs</h3>
                        </div>
                        <div className='product'>
                            <img src={Cookies} />
                            <h3 className='name'>Cookies</h3>
                        </div>
                        <div className='product'>
                            <img src={Cupcakes} />
                            <h3 className='name'>Cupcakes</h3>
                        </div>
                    </div>
                    <button className="btn btn-outline-secondary btn-lg px-4 contact">
                        <Link to="/menu" className="nav-link"> View Menu</Link>
                    </button>
                </div>
            </div>

        </>
    )

}

export default Products