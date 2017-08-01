import React, { Component } from 'react';
import ReadStatus from './ReadStatus';
import { Link } from 'react-router-dom';
import * as bookApi from '../../services/BookApi';

class Reads extends Component {
    constructor() {
        super();
        this.state = {
            currentlyReading: [],
            wantToRead: [],
            read: []
        };
    }

    separateReadList(allBook) {
        return {
            currentlyReading: allBook.filter(book => (book.shelf === 'currentlyReading')),
            wantToRead: allBook.filter(book => (book.shelf === 'wantToRead')),
            read: allBook.filter(book => (book.shelf === 'read')),
        }
    }

    componentWillMount() {
        bookApi.getAll().then(res => {
            const allBook = this.separateReadList(res);
            this.setState({
                currentlyReading: allBook.currentlyReading,
                wantToRead: allBook.wantToRead,
                read: allBook.read,
            });
        });
    }

    onChangeBookState = (book, futureShelf) => {
        let allBook = this.state.currentlyReading.concat(this.state.read.concat(this.state.wantToRead));
        const actualBook = allBook.find(element => (element.id === book.id));
        const newBook = Object.assign({}, actualBook, { shelf: futureShelf });

        // Server update
        bookApi.update(book, futureShelf).then(res => {            
            //Local update
            if (book.shelf !== 'none') {
                allBook = allBook.filter(b => (b.id !== book.id));
            }
            allBook = allBook.concat(newBook);
            const separateBook = this.separateReadList(allBook);
            this.setState({
                currentlyReading: separateBook.currentlyReading,
                wantToRead: separateBook.wantToRead,
                read: separateBook.read,
            });            
            this.props.changeMessages('The book ' + book.title + ' has been successfully updated!', 'Update!');
        });

    }

    render() {
        return (
            <div className='list-books-content'>
                <ReadStatus title='Currently Reading' books={this.state.currentlyReading} booksState={this.onChangeBookState} />
                <ReadStatus title='Want To read' books={this.state.wantToRead} booksState={this.onChangeBookState} />
                <ReadStatus title='Read' books={this.state.read} booksState={this.onChangeBookState} />
                <div className="open-search">
                    <Link to='/search'>
                        <div >Add a book</div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Reads;
