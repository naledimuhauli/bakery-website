import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    // Inline styling for footer
    const footerStyle = {
        backgroundColor: 'rgba(155, 109, 78, 0.753)', // Light brown background
        color: 'rgba(37, 16, 2, 0.753)', // Brown text color
        minWidth: '100%',
    };

    return (
        <footer style={footerStyle} className="py-1">
            <div className="container">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item">
                        <Link to="/" className="nav-link px-2" style={{ color: 'black' }}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/aboutus" className="nav-link px-2" style={{ color: 'black' }}>About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/menu" className="nav-link px-2" style={{ color: 'black' }}>Menu</Link>
                    </li>
                </ul>
                <p className="text-center" style={{ color: 'black' }}>&copy; 2024 Dreamy Bakes, Inc</p>
            </div>
        </footer>
    );
}

export default Footer;
