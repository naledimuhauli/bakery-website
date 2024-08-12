import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='container home-page'>
                <p className='welcome'>Welcome To</p>
                <h1 className='heading'>Dreamy Bakes</h1>
                <p className='description'>Where Every Bite Is Made With Love</p>
                <div className='products'>
                    <button className='product1'>
                        <Link to="/menu" className="nav-link"> View Menu</Link>
                    </button>
                </div>
                <div className='details'>
                    <p className='address'>123 PeggyVera Road. Johannesburg South</p>
                    <p className='opening-hours'>OPENINNG HOURS: 8:30am - 8:30pm</p>
                    <p className='number'>011 236 7624</p>
                </div>
            </div>
        </div >
    )
}

export default Home 