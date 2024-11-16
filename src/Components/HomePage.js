import React from 'react';
import '../Components/Styles/HomePage.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    
    const Navigate=useNavigate();

    function handleClick(){
        Navigate('/books');
    }

    return (
        <div className="home">
            <h1 className="home-title">Welcome to the Book Store</h1>
            <p className="home-description">Explore a wide variety of books for every reader.</p>
            <button className="explore-button" onClick={handleClick}>Start Exploring</button>
        </div>
    );
}

export default HomePage;
