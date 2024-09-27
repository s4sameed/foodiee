import DeveloperInfo from "./DeveloperInfo";

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Us</h1>
            <p className="about-description">
                Welcome to FoodExpress, your go-to solution for fast and reliable food delivery! Our mission is to bring delicious meals right to your doorstep, from your favorite local restaurants.
            </p>
            
            <div className="about-sections">
                <section className="about-section">
                    <h3>Our Mission</h3>
                    <p>
                        We strive to make food delivery quick, affordable, and hassle-free. Whether you’re craving a late-night snack or a family dinner, we have you covered.
                    </p>
                </section>

                <section className="about-section">
                    <h3>What We Offer</h3>
                    <p>
                        At FoodExpress, we partner with a variety of restaurants to offer a wide selection of cuisines. From pizzas to sushi, we deliver it all!
                    </p>
                </section>

                <section className="about-section">
                    <h3>Our Values</h3>
                    <p>
                        We believe in quality, speed, and customer satisfaction. Our dedicated team works around the clock to ensure your food arrives hot and fresh every time.
                    </p>
                </section>
                <section className="about-section">
                    <DeveloperInfo name={"Sameed"}/>
                </section>
            </div>
        </div>
    );
}

export default About;