import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategoriesThunk } from '../../actions/CategoryAction';

class CategoryList extends Component {
    componentWillMount() {
        this.props.fetchCategories();
    }
    render() {
        const { categories } = this.props;
        console.log(categories);
        return (
            <div className='mdc-layout-grid'>
                <div className="mdc-layout-grid__inner">
                    <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
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
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {    
    return {
        fetchCategories: () => dispatch(fetchCategoriesThunk()),
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryList);