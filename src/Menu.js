import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';
import CroissantImg from './images/croissant.jpg';
import DanishImg from './images/danish.jpg';
import EclairImg from './images/eclair.jpg';
import MacaronImg from './images/macaron.jpg';
import TartImg from './images/tart.jpg';

const Menu = () => {
    const pastries = [
        {
            name: 'Croissant',
            description: 'Buttery, Flaky',
            price: '$3.00',
            image: CroissantImg
        },
        {
            name: 'Danish',
            description: 'Sweet, Fruit-filled',
            price: '$3.50',
            image: DanishImg
        },
        {
            name: 'Eclair',
            description: 'Cream-filled, Chocolate-glazed',
            price: '$4.00',
            image: EclairImg
        },
        {
            name: 'Macaron',
            description: 'Delicate, Colorful',
            price: '$2.50',
            image: MacaronImg
        },
        {
            name: 'Tart',
            description: 'Crisp, Fruit-topped',
            price: '$4.50',
            image: TartImg
        }
    ];

    return (
        <div className='menu'>
            <div className="container">
                <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Our Menu</h1>
                <div className="row">
                    {pastries.map((pastry, index) => (
                        <div className="col-lg-4 col-md-6 mb-4" key={index}>
                            <div className="card">
                                <img src={pastry.image} className="card-img-top" alt={pastry.name} />
                                <div className="card-body">
                                    <h5 className="card-title">{pastry.name}</h5>
                                    <p className="card-text">{pastry.description}</p>
                                    <p className="card-text"><strong>Price:</strong> {pastry.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Menu;
