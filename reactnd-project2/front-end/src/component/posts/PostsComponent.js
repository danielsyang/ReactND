import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './posts.css';
import PostsList from './PostsList';
import { fetchPostsThunk, fetchPostCategoryThunk } from '../../actions/PostAction';

class PostsComponent extends Component {
    state = {
        type: '',
    }
    componentDidMount() {
        const typeCat = this.state.type;
        if (typeCat === 'posts') {
            this.props.loadPosts();
        } else {
            this.props.loadPostsCategory(typeCat);
        }
    }
    componentWillMount() {
        const cat = this.props.category.match.params.category;
        this.setState({
            type: cat,
        });
    }
    render() {
        const { posts } = this.props;
        return (
            <div className='posts'>
                <h2>
                    All posts
                </h2>
                <a className='mdc-button mdc-button--unelevated mdc-button--accent' href='/create'>
                    Create post
                </a>
                <PostsList posts={posts} />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadPosts: () => dispatch(fetchPostsThunk()),
        loadPostsCategory: cat => dispatch(fetchPostCategoryThunk(cat)),
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
}
PostsComponent.PropTypes = {
    category: PropTypes.object.isRequired,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostsComponent);