import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/CategoryAction';

class CategoryList extends Component {
    componentWillMount() {        
        this.props.loadCategories();
    }
    render() {
        console.log(this.props);
        return (
            <div className='category mdc-list-group'>
                <h3 className='mdc-list-group__subheader'>Categories</h3>
                <ul className='mdc-list mdc-list--two-line'>
                    <li className='mdc-list-item'>
                        <span className='mdc-list-item__start-detail'>
                            <i className='material-icons'>folder</i>
                        </span>
                        <span className='mdc-list-item__text'>Category 1</span>
                        <span className='mdc-list-item__end-detail'>
                            <i className='material-icons'>info</i>
                        </span>
                    </li>
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
        categories: initial,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryList);