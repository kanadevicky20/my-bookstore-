import React from 'react';
import '../Components/Styles/HomePage.css';

function HomePage() {

    return (
        <div className="home">
            <h1 className="home-title">Welcome to the Book Store</h1>
            <p className="home-description">Explore a wide variety of books for every reader.</p>
            <button className="explore-button">Start Exploring</button>
        </div>
    );
}

export default HomePage;
