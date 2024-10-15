const Contact = () => {
    return (
        <div className="flex flex-col items-center py-10 px-6">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 mb-8 text-center">
                We’d love to hear from you! Reach out to us anytime and we'll happily answer your questions.
            </p>

            <div className="flex flex-col md:flex-row w-full max-w-6xl space-y-8 md:space-y-0 md:space-x-8">
                <div className="contact-details w-full md:w-1/3 p-6 bg-white rounded-lg shadow-md">
                    <h3 className="text-2xl font-semibold mb-2">Contact Details:</h3>
                    <p>Email: <span className="text-gray-700">support@fooddelivery.com</span></p>
                    <p>Phone: <span className="text-gray-700">+123 456 7890</span></p>
                    <p>Address: <span className="text-gray-700">123 Food Street, Koramangala, Bangalore</span></p>
                </div>

                <div className="contact-map w-full md:w-2/3">
                    <iframe
                        title="Our Location"
                        className="w-full h-64 md:h-96 rounded-lg shadow-md"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.737212558514!2d77.61899611417008!3d12.934533790875503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1441201fdc7f%3A0x7f1c75be768d85d!2sKoramangala%2C%20Bengaluru%2C%20Karnataka%20560034!5e0!3m2!1sen!2sin!4v1631725094398!5m2!1sen!2sin"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;