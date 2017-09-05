import React, { Component } from 'react';

import CategoryList from './CategoryList';
import './categories.css';

class CategoryComponent extends Component {
    render() {
        return (
            <div className='category content'>
                <h1 className='mdc-typography--display1'>
                    Categories
                </h1>
                <p className='mdc-typography--body1'>
                    All the categories are listed bellow.
                </p>
                <CategoryList />
            </div>
        )
    }
}

export default CategoryComponent;