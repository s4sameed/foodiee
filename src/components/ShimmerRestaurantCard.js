const ShimmerRestaurantCard = ({ count = 1 }) => {
    return (
        <div className="shimmer-card-container">
            {Array(count)
                .fill("")
                .map((_, index) => (
                    <div className="res-card shimmer" key={index}>
                        <div className="shimmer-img"></div>
                        <div className="shimmer-text shimmer-text-title"></div>
                        <div className="shimmer-text shimmer-text-subtitle"></div>
                        <div className="shimmer-text shimmer-text-subtitle"></div>
                        <div className="shimmer-text shimmer-text-subtitle"></div>
                        <div className="shimmer-text shimmer-text-subtitle"></div>
                    </div>
                ))}
        </div>
    );
};

export default ShimmerRestaurantCard;