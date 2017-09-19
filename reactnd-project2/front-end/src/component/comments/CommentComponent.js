import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import { upVoteCommentThunk, downVoteCommentThunk } from '../../actions/CommentAction';

class CommentComponent extends Component {
    convertTime = timestamp => (moment(timestamp).format('DD-MM-YYYY'));
    upVote = (id) => {
        this.props.upVoteComment(id);
    }
    downVote = (id) => {
        this.props.downVoteComment(id);
    }
    render() {
        const { comments, checkVoteScore } = this.props;
        return (
            <div>
                <h3>Comments</h3>

                {comments.map((comment) => (
                    <div key={comment.id}>
                        <p>{comment.author} says: <small>{this.convertTime(comment.timestamp)}</small></p>
                        <p>{comment.body}</p>
                        <p>{checkVoteScore(comment.voteScore)}</p>
                        <a className='mdc-button' onClick={() => this.upVote(comment.id)}>UpVote</a>
                        /
                        <a className='mdc-button' onClick={() => this.downVote(comment.id)}>DownVote</a>
                    </div>
                ))}

            </div>
        )
    }
}

CommentComponent.PropTypes = {
    comments: PropTypes.array.isRequired,
    checkVoteScore: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => {
    return {
        upVoteComment: id => dispatch(upVoteCommentThunk(id)),
        downVoteComment: id => dispatch(downVoteCommentThunk(id)),
    }
}

const mapStateToProps = state => {
    return {        
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentComponent);