import React from 'react';
import '../Components/Styles/ContactUsPage.css';

function ContactUsPage() {
    return (
        <div className="contact-us">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-description">We'd love to hear from you! Reach out to us for any queries, suggestions, or support.</p>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" className="form-input" />
                <input type="email" placeholder="Your Email" className="form-input" />
                <textarea placeholder="Your Message" className="form-textarea"></textarea>
                <button type="submit" className="submit-button">Send Message</button>
            </form>
        </div>
    );
}

export default ContactUsPage;
