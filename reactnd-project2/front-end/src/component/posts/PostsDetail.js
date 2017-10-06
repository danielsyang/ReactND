import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import CommentComponent from '../comments/CommentComponent';
import CommentCreate from '../comments/CommentCreate';
import { getPostThunk, upVotePostThunk, downVotePostThunk, deletePostThunk } from '../../actions/PostAction';
import { fetchCommentsPostThunk } from '../../actions/CommentAction';

const styles = theme => ({
});

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

    deletePost = () => {
        const id = this.props.post.id;        
        this.props.deletePost(id)
            .then(() => {
                console.log('deu certo');
            }).catch((erro) => {
                console.log(erro);
                console.log('deu errado');
            })
    }

    convertTime = timestamp => moment(timestamp).format('DD-MM-YYYY');

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
                            <button className='mdc-button' onClick={this.deletePost}>
                                Delete
                            </button>
                        </div>
                        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-12'>
                            <CommentComponent comments={comments} checkVoteScore={this.checkVoteScore} />
                        </div>
                        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-12'>
                            <button className='mdc-button'>Add Comment</button>
                        </div>
                        <CommentCreate postId={post.id} />
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
        deletePost: id => dispatch(deletePostThunk(id)),
    }
};

const mapStateToProps = state => {
    return {
        post: state.selectedPost,
        comments: state.postComments,
    }
};

PostsDetail.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(PostsDetail));