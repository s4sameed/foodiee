import React from 'react';

const ShimmerUI = () => {
    return (
        <div className="space-y-4 animate-pulse">
            <div className="h-8 bg-gray-300 rounded-md w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded-md w-full"></div>
            <div className="h-4 bg-gray-300 rounded-md w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded-md w-full"></div>
            <div className="h-4 bg-gray-300 rounded-md w-1/2"></div>
        </div>
    );
};

export default ShimmerUI;