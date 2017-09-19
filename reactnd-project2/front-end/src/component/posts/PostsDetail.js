import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import CommentComponent from '../comments/CommentComponent';
import { getPostThunk, upVotePostThunk, downVotePostThunk } from '../../actions/PostAction';
import { fetchCommentsPostThunk } from '../../actions/CommentAction';
import './posts.css';

class PostsDetail extends Component {
    state = {
        id: '',
    }
    componentWillMount() {
        const id = this.props.postId.match.params.id;
        this.setState({
            id: id,
        });
    }
    componentDidMount() {
        this.props.getPost(this.state.id);
        this.props.getComments(this.state.id);
    }

    checkVoteScore = (voteScore) => {
        if (voteScore === 0) {
            return 'No one likes it yet!';
        } else if (voteScore === 1) {
            return 'One person likes it!';
        } else if (voteScore === -1) {
            return 'One person hates it!';
        } else if (voteScore < 0) {
            return voteScore + ' people hate it';
        } else {
            return voteScore + ' people like it';
        }
    }

    upVote = () => {
        const id = this.props.post.id;
        this.props.upVotePost(id);
    }

    downVote = () => {
        const id = this.props.post.id;
        this.props.downVotePost(id);
    }

    convertTime = timestamp => (moment(timestamp).format('DD-MM-YYYY'));

    render() {
        const { post, comments } = this.props;
        return (
            <div className='post-detail'>
                <div className='mdc-layout-grid max-width'>
                    <div className='mdc-layout-grid__inner'>
                        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-12'>
                            <h1>{post.title}</h1>
                            <p>
                                <small>Created at {this.convertTime(post.timestamp)} by {post.author} in <a href='/react' className='no-decoration'> {post.category}</a>
                                </small>
                            </p>
                            <p>
                                {post.body}
                            </p>
                        </div>
                        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-12'>
                            <span>
                                {this.checkVoteScore(post.voteScore)}
                            </span>
                            <button className='mdc-fab material-icons' onClick={this.upVote}>
                                <span className='mdc-fab__icon'>mood</span>
                            </button>
                            <button className='mdc-fab material-icons' onClick={this.downVote}>
                                <span className='mdc-fab__icon'>mood_bad</span>
                            </button>
                        </div>
                        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-12'>
                            <CommentComponent comments={comments} checkVoteScore={this.checkVoteScore} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPost: id => dispatch(getPostThunk(id)),
        getComments: id => dispatch(fetchCommentsPostThunk(id)),
        upVotePost: id => dispatch(upVotePostThunk(id)),
        downVotePost: id => dispatch(downVotePostThunk(id)),
    }
};

const mapStateToProps = state => {
    return {
        post: state.selectedPost,
        comments: state.postComments,
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostsDetail);