import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './images/about.jpg';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const details = [{
        ourStory: 'Welcome to Dreamy Bakes! Founded in 2024 by Siphokazi Naledi Muhauli, we combine traditional recipes with creative techniques to bring you delightful pastries. From a small dream to a local favorite, our bakery offers warmth and joy to our community.',
    }];

    return (
        <>
            <div className='about-us'>
                <div className="container about">
                    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">About us</h1>
                            <p className="lead">{details[0].ourStory}</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                                <button type="button" className="btn btn-outline-secondary btn-lg px-4 contact">
                                    <Link to="/aboutus" className="nav-link"> More Details</Link>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                            <img className="rounded-lg-3" src={About} alt="About Us" width="450" height="450" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;
