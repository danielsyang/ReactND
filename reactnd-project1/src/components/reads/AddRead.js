import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './AddRead.css';
import * as bookApi from '../../services/BookApi';
import ReadStatus from './ReadStatus';

class AddRead extends Component {

    state = {
        termSearch: '',
        listSearch: []
    };

    onInputChange = (event) => {
        const term = event.target.value;
        this.setState({
            termSearch: event.target.value
        });
        if (term !== '') {
            this.searchImplicit(term);
        }

    };   

    searchImplicit(term) {
        let a = [];
        let badServerHelper = [];
        bookApi.getAll().then(res => {
            a = res;
        });
        bookApi.search(term, 5).then(res => {
            if (res !== undefined && res.error === undefined && res.error !== 'empty query') {
                for (var i = 0; i < res.length; i++) {
                    let b = a.filter(c => c.id === res[i].id);                    
                    badServerHelper = badServerHelper.concat(b);
                    if (b.length === 0) {
                        badServerHelper.push(res[i]);
                    }
                }
                this.setState({
                    listSearch: badServerHelper
                });
            } else {
                this.setState({
                    listSearch: []
                });
            }
        });
    }

    onBookChange = (book, shelf) => {
        this.props.booksState(book, shelf);
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <div className="close-search">Close</div>
                    </Link>

                    <div className="search-books-input-wrapper">
                        <input type="text"
                            placeholder="Search by title or author"
                            value={this.state.termSearch}
                            onChange={this.onInputChange} />
                    </div>
                </div>

                {this.state.termSearch.length !== 0 &&
                    (<ReadStatus title='Result'
                        books={this.state.listSearch}
                        booksState={this.onBookChange} />)
                }
            </div>
        )
    }
}

AddRead.PropTypes = {
    changeMessages: PropTypes.func.isRequired,
    booksState: PropTypes.func.isRequired,    
}

export default AddRead;