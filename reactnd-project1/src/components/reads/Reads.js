import React, { Component } from 'react';
import ReadStatus from './ReadStatus';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Reads extends Component {

    render() {
        return (
            <div className='list-books-content'>
                <ReadStatus title='Currently Reading'
                    books={this.props.currentlyReading}
                    booksState={this.props.booksState} />
                <ReadStatus title='Want To read'
                    books={this.props.wantToRead}
                    booksState={this.props.booksState} />
                <ReadStatus title='Read'
                    books={this.props.read}
                    booksState={this.props.booksState} />
                <div className="open-search">
                    <Link to='/search'>
                        <div >Add a book</div>
                    </Link>
                </div>
            </div>
        );
    }
}

Reads.PropTypes = {
    currentlyReading: PropTypes.array.isRequired,
    wantToRead: PropTypes.array.isRequired,
    read: PropTypes.array.isRequired,
    booksState: PropTypes.func.isRequired,
};

export default Reads;
