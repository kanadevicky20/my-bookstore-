import React from 'react';
import '../Components/Styles/BookCard.css';

function BookCard({ book }) {
    return (
        <div className="book-card">
            <img src={book.image} alt={book.title} className="book-image" />
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Price: {book.price}</p>
            <p className="book-description">{book.description}</p>
            <button className="buy-now-button">Buy Now</button>
        </div>
    );
}

export default BookCard;
