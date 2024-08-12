import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const AboutBakery = () => {
    const details = [{
        ourStory: 'Welcome to Dreamy Bakes, where every bite tells a story! Founded in 2024 by the passionate baker Siphokazi Naledi Muhauli, Dreamy Bakes started as a dream in a small kitchen. What began as a hobby of perfecting traditional recipes quickly blossomed into a beloved bakery, known for its artisanal pastries and inviting atmosphere. From our humble beginnings, we have grown into a cherished local gem, dedicated to bringing joy and delight to our community with every creation.',
        ourMission: 'At Dreamy Bakes, our mission is simple yet profound: to craft exquisite pastries that create memorable experiences. We are committed to infusing each product with creativity and care, using high-quality, locally-sourced ingredients. Our goal is to offer not just a treat, but a moment of joy and comfort with every bite. We strive to be a place where people come together, celebrate life\'s moments, and enjoy the art of fine baking.',
        ourValues: [
            'Quality: We believe in using only the finest ingredients to ensure that each pastry meets our high standards for flavor and freshness. Quality is at the heart of everything we do.',
            'Creativity: Our bakery is a canvas for creativity. We constantly explore new flavors, designs, and techniques to offer unique and exciting pastries that surprise and delight our customers.',
            'Community: We are deeply rooted in our community and committed to supporting local businesses and initiatives. We believe in building strong relationships with our customers and contributing positively to our local area.',
            'Sustainability: We are dedicated to minimizing our environmental impact by adopting eco-friendly practices. From using sustainable packaging to reducing waste, we are committed to making a positive difference.'
        ]
    }];

    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className='about-us'>
                <div className="container about">
                    <div className="row align-items-center rounded-3 border shadow-lg">
                        <div className="col">
                            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">About us</h1>
                            <div className="col">
                                <h5 className='title'>Our Story</h5>
                                <p className="lead">{details[0].ourStory}</p>
                                <h5 className='title'>Our Mission</h5>
                                <p className="lead">{details[0].ourMission}</p>
                                <h5 className='title'>Our Values</h5>
                                <ul>
                                    {details[0].ourValues.map((detail, index) => (
                                        <li key={index} className="lead">{detail}</li>
                                    ))}
                                </ul>
                                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                                    <Link to="/menu" className="btn btn-primary btn-lg px-4 me-sm-3">
                                        View Menu
                                    </Link>
                                    <button type="button" onClick={() => navigate(-1)} className="btn btn-outline-secondary btn-lg px-4">
                                        Back
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutBakery;
