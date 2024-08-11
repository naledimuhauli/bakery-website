import React from 'react';
import './App.css';

const Navbar = () => {
    return (
        <>
            <header className="p-2">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
                        </a>

                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
                            <li><a href="#" className="nav-link px-2 link-body-emphasis">About Us</a></li>
                            <li><a href="#" className="nav-link px-2 link-body-emphasis">Menu</a></li>
                        </ul>

                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                        </form>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Navbar