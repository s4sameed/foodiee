const Contact = () => {
    return (
        <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-description">
                We’d love to hear from you! Reach out to us anytime and we'll happily answer your questions.
            </p>
            
            <div className="contact-info">
                <div className="contact-details">
                    <h3>Contact Details:</h3>
                    <p>Email: support@fooddelivery.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Address: 123 Food Street, Koramangala, Bangalore</p>
                </div>

                <div className="contact-map">
                    <iframe
                        title="Our Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.737212558514!2d77.61899611417008!3d12.934533790875503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1441201fdc7f%3A0x7f1c75be768d85d!2sKoramangala%2C%20Bengaluru%2C%20Karnataka%20560034!5e0!3m2!1sen!2sin!4v1631725094398!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;