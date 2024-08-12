import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './App.css'; // Ensure this file contains your custom styles

const Navbar = () => {
    return (
        <header className="p-2">
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-2">
                    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <span className="fs-4">Dreamy Bakes</span>
                    </Link>

                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/aboutus" className="nav-link">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/menu" className="nav-link">Menu</Link>
                        </li>
                    </ul>
                </header>
            </div>
        </header>
    );
};

export default Navbar;
