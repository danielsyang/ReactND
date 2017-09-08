import React, { Component } from 'react';
import { connect } from 'react-redux';

import './posts.css';
import PostsList from './PostsList';
import { fetchPosts } from '../../actions/PostAction';

class PostsComponent extends Component {
    componentWillMount() {
        this.props.loadPosts();
    }
    render() {
        const { posts } = this.props;

        return (
            <div className='posts'>
                <h2>
                    All posts
                </h2>
                <PostsList posts={posts}/>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadPosts: () => dispatch(fetchPosts())
    }
}

const mapStateToProps = (initial) => {
    return {
        posts: initial.posts,
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostsComponent);