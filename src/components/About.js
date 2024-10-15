import DeveloperInfo from "./DeveloperInfo";

const About = () => {
    return (
        <div className="flex flex-col items-center py-10 px-6">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <p className="text-lg text-gray-700 mb-8 text-center">
                Welcome to FoodExpress, your go-to solution for fast and reliable food delivery! Our mission is to bring delicious meals right to your doorstep, from your favorite local restaurants.
            </p>
            
            <div className="w-full max-w-4xl space-y-6">
                <section className="p-6 bg-white rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-gray-600">
                        We strive to make food delivery quick, affordable, and hassle-free. Whether you’re craving a late-night snack or a family dinner, we have you covered.
                    </p>
                </section>

                <section className="p-6 bg-white rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-2">What We Offer</h3>
                    <p className="text-gray-600">
                        At FoodExpress, we partner with a variety of restaurants to offer a wide selection of cuisines. From pizzas to sushi, we deliver it all!
                    </p>
                </section>

                <section className="p-6 bg-white rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
                    <p className="text-gray-600">
                        We believe in quality, speed, and customer satisfaction. Our dedicated team works around the clock to ensure your food arrives hot and fresh every time.
                    </p>
                </section>
                
                <section className="p-6 bg-white rounded-lg shadow-md">
                    <DeveloperInfo name={"Sameed"}/>
                </section>
            </div>
        </div>
    );
}

export default About;