import React from 'react';
import BookCard from './BookCard';
import '../Components/Styles/BookListPage.css';

const books = [
    {
        id: 1,
        title: 'Book',
        author: 'K_Vicky',
        price: '00',
        image: 'https://i0.wp.com/jonathanmarkwriter.com/wp-content/uploads/2016/11/Coming-Soon-Hardcover-Book-MockUp.png?fit=900%2C1001&ssl=1',
        description: 'Coming Soon...',
    },
    {
        id: 1,
        title: 'Book',
        author: 'K_Vicky',
        price: '00',
        image: 'https://i0.wp.com/jonathanmarkwriter.com/wp-content/uploads/2016/11/Coming-Soon-Hardcover-Book-MockUp.png?fit=900%2C1001&ssl=1',
        description: 'Coming Soon...',
    },
    {
        id: 1,
        title: 'Book',
        author: 'K_Vicky',
        price: '00',
        image: 'https://i0.wp.com/jonathanmarkwriter.com/wp-content/uploads/2016/11/Coming-Soon-Hardcover-Book-MockUp.png?fit=900%2C1001&ssl=1',
        description: 'Coming Soon...',
    },
    {
        id: 1,
        title: 'Book',
        author: 'K_Vicky',
        price: '00',
        image: 'https://i0.wp.com/jonathanmarkwriter.com/wp-content/uploads/2016/11/Coming-Soon-Hardcover-Book-MockUp.png?fit=900%2C1001&ssl=1',
        description: 'Coming Soon...',
    },
    {
        id: 1,
        title: 'Book',
        author: 'K_Vicky',
        price: '00',
        image: 'https://i0.wp.com/jonathanmarkwriter.com/wp-content/uploads/2016/11/Coming-Soon-Hardcover-Book-MockUp.png?fit=900%2C1001&ssl=1',
        description: 'Coming Soon...',
    },
    {
        id: 1,
        title: 'Book',
        author: 'K_Vicky',
        price: '00',
        image: 'https://i0.wp.com/jonathanmarkwriter.com/wp-content/uploads/2016/11/Coming-Soon-Hardcover-Book-MockUp.png?fit=900%2C1001&ssl=1',
        description: 'Coming Soon...',
    },
   
];

function BookListPage() {
    return (
        <div className="book-list">
            <h1 className="book-list-title">Books Available</h1>
            <div className="books">
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
}

export default BookListPage;
