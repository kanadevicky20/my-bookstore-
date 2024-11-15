import React from 'react';
import '../Components/Styles/AboutUsPage.css';

function AboutUsPage() {
    return (
        <div className="about-us">
            <h1 className="about-title">About Us</h1>
            <p className="about-description">
                Welcome to our Book Store! We are passionate about books and aim to bring you a wide variety of books, from timeless classics to the latest bestsellers.
                Our mission is to foster a love of reading in people of all ages. We believe books are gateways to new worlds and perspectives.
            </p>
            <div className="team">
                <h2 className="team-title">Meet Our Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <img src="https://via.placeholder.com/150" alt="Team Member" className="team-member-img" />
                        <h3>K_Vicky</h3>
                        <p>Founder</p>
                    </div>
                    <div className="team-member">
                        <img src="https://via.placeholder.com/150" alt="Team Member" className="team-member-img" />
                        <h3>K_Vicky</h3>
                        <p>Founder</p>
                    </div>
                    <div className="team-member">
                        <img src="https://via.placeholder.com/150" alt="Team Member" className="team-member-img" />
                        <h3>K_Vicky</h3>
                        <p>Founder</p>
                    </div>                   
                </div>
            </div>
        </div>
    );
}

export default AboutUsPage;
