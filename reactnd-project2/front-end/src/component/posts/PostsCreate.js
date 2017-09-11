import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import uuid from 'uuid';

import { fetchCategories } from '../../actions/CategoryAction';
import { createPostServer } from '../../actions/PostAction';
import './posts.css';

class PostsCreate extends Component {
    state = {
        title: '',
        owner: '',
        category: {},
        body: '',
    }
    componentWillMount() {
        this.props.loadCategories();
    }

    onTitleChange = (event) => {
        const title = event.target.value;
        this.setState({
            title: title,
        });
    };

    onOwnerChange = (event) => {
        const owner = event.target.value;
        this.setState({
            owner: owner,
        });
    };

    onBodyChange = (event) => {
        const body = event.target.value;
        this.setState({
            body: body,
        });
    };

    onCategoryChange = (event) => {
        const index = event.target.value;
        const cat = this.props.categories[index];
        this.setState({
            category: cat,
        });
    };

    createPost = () => {
        const id = uuid();
        const currentTime = moment().unix();
        const { title, owner, category, body } = this.state;
        this.props.create({
            id: id,
            timestamp: currentTime,
            title: title,
            body: body,
            owner: owner,
            category: category.name,
        }).catch((erro) => {
            console.log(erro);
        });
    };

    render() {
        const { categories } = this.props;
        return (
            <div className='post-create'>
                <div className='mdc-layout-grid'>
                    <div className='mdc-layout-grid__inner'>
                        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-4'>
                            <div className='mdc-textfield'>
                                <input id='title' type='text' className='mdc-textfield__input' value={this.state.title} onChange={this.onTitleChange} />
                                <label className='mdc-textfield__label mdc-textfield__label--float-above' htmlFor='title'>Title</label>
                            </div>
                        </div>
                        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-4'>
                            <div className='mdc-textfield'>
                                <input id='owner' type='text' className='mdc-textfield__input' value={this.state.owner} onChange={this.onOwnerChange} />
                                <label className='mdc-textfield__label mdc-textfield__label--float-above' htmlFor='owner'>Owner</label>
                            </div>
                        </div>
                        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-4'>
                            <div className='mdc-textfield'>
                                <select id='category' type='text' className='mdc-select' onChange={this.onCategoryChange}>
                                    <option defaultValue>Pick one category</option>
                                    {categories.map((elem, index) => (
                                        <option key={index} value={index}>{elem.name}</option>
                                    ))}
                                </select>
                                <label className='mdc-textfield__label mdc-textfield__label--float-above' htmlFor='category'>Category</label>
                            </div>
                        </div>
                        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-12'>
                            <div className='mdc-textfield mdc-textfield--multiline'>
                                <label className='mdc-textfield__label mdc-textfield__label--float-above' htmlFor='body' >Body</label>
                                <textarea id='body' className='mdc-textfield__input' rows='8' cols='40' value={this.state.body} onChange={this.onBodyChange}></textarea>
                            </div>
                        </div>
                        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-12'>
                            <button className='mdc-button mdc-button--unelevated mdc-button--accent' onClick={this.createPost}>
                                create
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCategories: () => (dispatch(fetchCategories())),
        create: post => dispatch(createPostServer(post)),
    }
};

const mapStateToProps = (initial) => {
    return {
        categories: initial.categories,
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostsCreate);