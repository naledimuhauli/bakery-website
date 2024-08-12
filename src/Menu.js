import React from 'react'; // Import React library
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS for styling
import './Menu.css'; // Import custom CSS for additional styling
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom for navigation
import CroissantImg from './images/croissant.jpg'; // Import images for pastries
import DanishImg from './images/danish.jpg';
import EclairImg from './images/eclair.jpg';
import MacaronImg from './images/macaron.jpg';
import TartImg from './images/tart.jpg';
import Cupcake1Img from './images/cupcake.jpg';
import Navbar from './Navbar'; // Import Navbar component

// Define the Menu component
const Menu = () => {
    // Array of pastry objects with details for each pastry
    const pastries = [
        {
            name: 'Croissants',
            description: (
                <>
                    <div><strong>Classic Butter:</strong> R60.00</div>
                    <div>Buttery, flaky, and golden-brown. A quintessential breakfast pastry.</div>
                    <div><strong>Almond:</strong> R60.00</div>
                    <div>Filled with sweet almond paste and topped with powdered sugar.</div>
                    <div><strong>Chocolate:</strong> R54.00</div>
                    <div>A rich chocolate filling encased in a crisp, buttery shell.</div>
                    <div><strong>Raisin:</strong> R58.00</div>
                    <div>Sweet raisins and a hint of cinnamon in a tender, flaky croissant.</div>
                </>
            ),
            image: CroissantImg // Image for Croissants
        },
        {
            name: 'Cakes',
            description: (
                <>
                    <div><strong>Classic Chocolate Cake:</strong> R80.00</div>
                    <div>A rich and moist chocolate cake with layers of velvety chocolate frosting.</div>
                    <div><strong>Chocolate Ganache Cake:</strong> R85.00</div>
                    <div>Decadent chocolate cake topped with a smooth chocolate ganache.</div>
                    <div><strong>Classic Red Velvet:</strong> R90.00</div>
                    <div>Red velvet cake with a hint of cocoa and a tangy cream cheese frosting.</div>
                    <div><strong>Red Velvet Cheesecake:</strong> R95.00</div>
                    <div>Red velvet base with creamy cheesecake filling and a sweet cream cheese topping.</div>
                </>
            ),
            image: DanishImg // Placeholder image for Cakes
        },
        {
            name: 'Eclairs',
            description: (
                <>
                    <div><strong>Classic Chocolate Éclair:</strong> R80.00</div>
                    <div className='light'>Light choux pastry filled with vanilla cream and topped with rich chocolate glaze.</div>
                    <div><strong>Coffee Éclair:</strong> R85.00</div>
                    <div className='light'>Filled with coffee-flavored cream and topped with a mocha glaze.</div>
                    <div><strong>Vanilla Éclair:</strong> R78.00</div>
                    <div className='light'>Traditional vanilla cream filling with a smooth, glossy glaze.</div>
                    <div><strong>Fruit Éclair:</strong> R82.00</div>
                    <div className='light'>Filled with a fruity cream and topped with a vibrant fruit glaze.</div>
                </>
            ),
            image: EclairImg // Image for Eclairs
        },
        {
            name: 'Macarons',
            description: (
                <>
                    <div><strong>Raspberry Macaron:</strong> R45.00</div>
                    <div className='light'>A tart raspberry filling sandwiched between delicate almond meringue shells.</div>
                    <div><strong>Chocolate Macaron:</strong> R48.00</div>
                    <div className='light'>Rich chocolate ganache with a hint of espresso.</div>
                    <div><strong>Vanilla Macaron:</strong> R43.00</div>
                    <div className='light'>Smooth vanilla bean filling in a light, airy shell.</div>
                    <div><strong>Matcha Macaron:</strong> R50.00</div>
                    <div className='light'>Subtle green tea-flavored filling with a hint of sweetness.</div>
                </>
            ),
            image: MacaronImg // Image for Macarons
        },
        {
            name: 'Cookies',
            description: (
                <>
                    <div><strong>Chocolate Chip Cookies:</strong> R45.00</div>
                    <div>Soft and chewy with chunks of rich chocolate chips.</div>
                    <div><strong>Oatmeal Raisin Cookies:</strong> R50.00</div>
                    <div>Chewy cookies packed with oats and plump raisins.</div>
                    <div><strong>Peanut Butter Cookies:</strong> R55.00</div>
                    <div>Rich and nutty with a soft, melt-in-your-mouth texture.</div>
                    <div><strong>White Chocolate Macadamia Cookies:</strong> R60.00</div>
                    <div>Crispy cookies with white chocolate chunks and macadamia nuts.</div>
                </>
            ),
            image: TartImg // Placeholder image for Cookies
        },
        {
            name: 'Cupcakes',
            description: (
                <>
                    <div><strong>Vanilla Cupcake:</strong> R35.00</div>
                    <div>A light and fluffy vanilla cupcake topped with creamy vanilla frosting.</div>
                    <div><strong>Chocolate Cupcake:</strong> R38.00</div>
                    <div>Moist chocolate cupcake with rich chocolate frosting.</div>
                    <div><strong>Red Velvet Cupcake:</strong> R40.00</div>
                    <div>Red velvet cupcake with a tangy cream cheese frosting.</div>
                    <div><strong>Lemon Cupcake:</strong> R37.00</div>
                    <div>Zesty lemon cupcake with a lemon glaze and a hint of lemon zest.</div>
                </>
            ),
            image: Cupcake1Img // Image for Cupcakes
        }
    ];

    const navigate = useNavigate(); // Initialize useNavigate hook for navigation

    // Render the Menu component
    return (
        <>
            <Navbar /> {/* Render the Navbar component */}
            <div className='menu'> {/* Container for menu */}
                <div className="container">
                    <h1 className='name'>Dreamy Bakes</h1> {/* Main heading */}
                    <h1 className="pastry">Menu</h1> {/* Menu heading */}
                    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                        {/* Map through the pastries array to render each pastry */}
                        {pastries.map((pastry, index) => (
                            <div className="col-12 mb-4" key={index}>
                                <div className={`row align-items-center ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                    {index % 2 === 0 ? (
                                        <>
                                            {/* For even indices (index % 2 === 0), the row will have the class text-right, aligning the content to the right.
                                        For odd indices, the row will have the class text-left, aligning the content to the left. */}
                                            <div className="col-md-6 one">
                                                <img src={pastry.image} className="img-fluid" alt={pastry.name} /> {/* Render pastry image */}
                                            </div>
                                            <div className="col-md-6">
                                                <h5 className="card-title">{pastry.name}</h5> {/* Render pastry name */}
                                                <hr />
                                                <p className="card-text">{pastry.description}</p> {/* Render pastry description */}
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="col-md-6 order-md-2 two">
                                                <img src={pastry.image} className="img-fluid" alt={pastry.name} /> {/* Render pastry image */}
                                            </div>
                                            <div className="col-md-6 order-md-1">
                                                <h5 className="card-title">{pastry.name}</h5> {/* Render pastry name */}
                                                <hr />
                                                <p className="card-text">{pastry.description}</p> {/* Render pastry description */}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button type="button" onClick={() => navigate(-1)} className="btn btn-secondary btn-lg px-4">
                        Back
                    </button> {/* Button to navigate back to the previous page */}
                </div>
            </div>
        </>
    );
}

export default Menu;
