import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <h2>Welcome to Houseplant Haven</h2>
            <p>Your one-stop shop for beautiful houseplants!</p>
            <Link to="/products">
                <button>Get Started</button>
            </Link>
        </div>
    );
};

export default LandingPage;
