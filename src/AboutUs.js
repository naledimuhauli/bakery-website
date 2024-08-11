import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './images/about.jpg';

const AboutUs = () => {
    const details = [{
        ourStory: 'Welcome to Dreamy Bakes! Founded in 2024 by Siphokazi Naledi Muhauli, we combine traditional recipes with creative techniques to bring you delightful pastries. From a small dream to a local favorite, our bakery offers warmth and joy to our community.',
        ourMission: 'Our mission is to create delicious pastries that bring comfort and joy. We aim to connect with people through our artful baking and fresh ingredients.',
        ourValues: [
            'Quality: Only the finest ingredients.',
            'Creativity: New flavors and designs.',
            'Community: Supporting local businesses.',
            'Sustainability: Eco-friendly practices.'
        ]
    }];

    return (
        <div className='about-us'>
            <div className="container about">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">About Dreamy Bakes</h1>
                        <h5 className='our-story'>Our Story</h5>
                        <p className="lead">{details[0].ourStory}</p>
                        <h5>Our Mission</h5>
                        <p>{details[0].ourMission}</p>
                        <h5>Our Values</h5>
                        <ul>
                            {details[0].ourValues.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Learn More</button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact Us</button>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img className="rounded-lg-3" src={About} alt="About Us" width="500" height="500" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
