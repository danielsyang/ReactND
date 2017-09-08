import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/CategoryAction';

class CategoryList extends Component {
    componentWillMount() {
        this.props.loadCategories();
    }
    render() {
        const { categories } = this.props;
        return (
            <div className='category mdc-list-group'>
                <h3 className='mdc-list-group__subheader'>Categories</h3>
                <ul className='mdc-list mdc-list--two-line'>
                    {categories.map((cat, index) => (
                        <li className='mdc-list-item' key={index}>
                            <span className='mdc-list-item__start-detail'>
                                <i className='material-icons'>folder</i>
                            </span>
                            <a href={cat.path}><span className='mdc-list-item__text'>{cat.name}</span></a>
                            <span className='mdc-list-item__end-detail'>
                                <i className='material-icons'>info</i>
                            </span>
                        </li>
                    ))}

                </ul>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCategories: () => dispatch(fetchCategories()),
    }
}

const mapStateToProps = (initial) => {
    return {
        categories: initial.categories,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryList);