import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
            <div className='container home-page'>
                <Navbar />
                <p className='welcome'>Welcome To</p>
                <h1 className='heading'>Dreamy Bakes</h1>
                <p className='description'>Where Every Bite Is Made With Love</p>
                <div className='products'>
                    <div className='col-3 product1'>Freshly Baked Croissants</div>
                    <div className='col-3 product2'>Fruit-Filled Danish</div>
                    <div className='col-3 product3'> Chocolate-Glazed Eclairs</div>
                    <div className='col-3 product4'>Colorful Macarons</div>
                    <div className='col-3 product5'>Crisp Fruit Tarts</div>
                </div>
                <div className='details'>
                    <p className='address'>123 PeggyVera Road. Johannesburg South</p>
                    <p className='opening-hours'>OPENINH HOURS: 8:30am - 8:30pm</p>
                    <p className='number'>011 236 7624</p>
                </div>
            </div>
        </div >
    )
}

export default Home 