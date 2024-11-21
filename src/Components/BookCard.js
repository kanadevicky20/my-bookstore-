import React from 'react';
import '../Components/Styles/BookCard.css';
import { useNavigate } from 'react-router-dom';

function BookCard({ book }) {
    const Navigate=useNavigate();

    function handleClick(e){
        Navigate('/story',{state:{id:e.target.value}});
    }

    return (
        <div className="book-card">
            <img src={book.image} alt={book.title} className="book-image" />
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            {/* <p>Price: {book.price}</p> */}
            <p className="book-description">{book.description}</p>
            <button className="buy-now-button" value={book?.id} onClick={handleClick}>Open</button>
        </div>
    );
}

export default BookCard;
