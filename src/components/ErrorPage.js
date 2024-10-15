import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="text-xl text-gray-700 mt-4">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300">
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;
