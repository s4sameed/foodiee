import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="error-container">
            <h1 className="error-title">404</h1>
            <p className="error-message">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="home-button">Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;
