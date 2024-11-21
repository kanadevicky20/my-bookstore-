import React from 'react';
import BookCard from './BookCard';
import '../Components/Styles/BookListPage.css';

const books = [
    {
        id: 1,
        title: 'Book 1',
        author: 'K_Vicky',
        price: '00',
        image: 'https://i0.wp.com/jonathanmarkwriter.com/wp-content/uploads/2016/11/Coming-Soon-Hardcover-Book-MockUp.png?fit=900%2C1001&ssl=1',
        description: 'Coming Soon...',
    },
    {
        id: 2,
        title: 'Book 2',
        author: 'K_Vicky',
        price: '00',
        image: 'https://i0.wp.com/jonathanmarkwriter.com/wp-content/uploads/2016/11/Coming-Soon-Hardcover-Book-MockUp.png?fit=900%2C1001&ssl=1',
        description: 'Coming Soon...',
    },
    {
        id: 3,
        title: 'Book 3',
        author: 'K_Vicky',
        price: '00',
        image: 'https://i0.wp.com/jonathanmarkwriter.com/wp-content/uploads/2016/11/Coming-Soon-Hardcover-Book-MockUp.png?fit=900%2C1001&ssl=1',
        description: 'Coming Soon...',
    },
    {
        id: 4,
        title: 'Book 4',
        author: 'K_Vicky',
        price: '00',
        image: 'https://i0.wp.com/jonathanmarkwriter.com/wp-content/uploads/2016/11/Coming-Soon-Hardcover-Book-MockUp.png?fit=900%2C1001&ssl=1',
        description: 'Coming Soon...',
    },
    {
        id: 5,
        title: 'Book 5',
        author: 'K_Vicky',
        price: '00',
        image: 'https://i0.wp.com/jonathanmarkwriter.com/wp-content/uploads/2016/11/Coming-Soon-Hardcover-Book-MockUp.png?fit=900%2C1001&ssl=1',
        description: 'Coming Soon...',
    },
    {
        id: 6,
        title: 'Book 6',
        author: 'K_Vicky',
        price: '00',
        image: 'https://i0.wp.com/jonathanmarkwriter.com/wp-content/uploads/2016/11/Coming-Soon-Hardcover-Book-MockUp.png?fit=900%2C1001&ssl=1',
        description: 'Coming Soon...',
    },
   
];

function BookListPage() {
    return (
        <div className="home">
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
