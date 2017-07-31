import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Reads.css';
import noImg from '../../images/noImageAvailable.jpg';

class ReadStatus extends Component {

    changeBook = (book, event) => {
        const futureShelf = event.target.value;
        this.props.booksState(book, futureShelf);
    }

    render() {
        const books = this.props.books;
        return (
            <div className='bookshelf'>
                <h3 className='bookshelf-title'><strong>{this.props.title}</strong></h3>
                <div className='bookshelf-books'>
                    <ol className="books-grid">
                        {
                            books.map((book) => {                                
                                const img = book.imageLinks === undefined ? noImg : book.imageLinks.thumbnail;                                
                                return (
                                    <li key={book.id}>
                                        <div className='book'>
                                            <div className="book-top">
                                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${img}")` }}></div>
                                                <div className="book-shelf-changer">
                                                    <select value={book.shelf} onChange={(event) => this.changeBook(book, event)}>
                                                        <option value="none" disabled defaultChecked>Move to...</option>
                                                        <option value="currentlyReading">Currently Reading</option>
                                                        <option value="wantToRead">Want to Read</option>
                                                        <option value="read">Read</option>
                                                        <option value="none">None</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="book-title">{book.title}</div>
                                            <div className="book-authors">{book.publisher}</div>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

ReadStatus.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    booksState: PropTypes.func.isRequired,
}

export default ReadStatus;