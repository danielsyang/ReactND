import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Reads from './components/reads/Reads.js';
import Header from './components/header/Header.js';
import AddRead from './components/reads/AddRead';
import Messages from './components/messages/Messages';
import * as bookApi from './services/BookApi';

import './App.css';

class App extends Component {

    state = {
        message: '',
        title: '',
        show: false,
        currentlyReading: [],
        wantToRead: [],
        read: [],
    };

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
        let newBook = undefined;
        if (actualBook !== undefined) {
            newBook = Object.assign({}, actualBook, { shelf: futureShelf });
        }

        // Server update
        bookApi.update(book, futureShelf).then(res => {
            //Local update
            if (actualBook !== undefined) {
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
            } else {
                book.shelf = futureShelf;
                if (futureShelf === 'wantToRead') {
                    this.setState({
                        wantToRead: this.state.wantToRead.concat(book)
                    });
                } else if (futureShelf === 'currentlyReading') {
                    this.setState({
                        currentlyReading: this.state.currentlyReading.concat(book)
                    });
                } else if (futureShelf === 'read') {
                    this.setState({
                        read: this.state.read.concat(book)
                    });
                }
            }
            this.onChangeMessages('The book ' + book.title + ' has been successfully updated!', 'Update!');
        });

    }

    onChangeMessages = (message, title) => {
        this.setState({
            message: message,
            title: title,
            show: true,
        });
    }

    hideMessage = () => {
        if (this.state.show) {
            this.setState({
                show: false,
            });
        }
    }

    render() {
        return (
            <div className='app'>
                <div className='list-books'>
                    <Header />
                    <Route exact path='/' render={() => (
                        <Reads currentlyReading={this.state.currentlyReading}
                            wantToRead={this.state.wantToRead}
                            read={this.state.read}
                            booksState={this.onChangeBookState} />
                    )} />

                    <Route exact path='/search' render={() => (
                        <AddRead changeMessages={this.onChangeMessages}
                            booksState={this.onChangeBookState} />
                    )} />

                    <Messages
                        message={this.state.message}
                        title={this.state.title}
                        show={this.state.show}
                        hideMessage={this.hideMessage}
                    />

                </div>
            </div>
        );
    }
}

export default App;
