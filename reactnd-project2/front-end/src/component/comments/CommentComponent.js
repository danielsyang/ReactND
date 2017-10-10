import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import moment from 'moment';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import { upVoteCommentThunk, downVoteCommentThunk, deleteCommentThunk } from '../../actions/CommentAction';

const styles = theme => ({
    headerComment: {
        fontWeight: 'bold',
    },
    spaceComment: {
        marginTop: 15,
        display: 'flex',
        flexDirection: 'column',
    },
    commentAuthor: {
        display: 'flex',
    },
    dateAuthor: {
        marginLeft: 'auto',
    },
    commnetVote: {
        display: 'flex',
        alignItems: 'center',
        margin: 'auto',
    },
    buttonDelete: {
        backgroundColor: '#ff0000',
        '&:hover': {
            backgroundColor: '#6d1010',
        }
    }

});

class CommentComponent extends Component {
    convertTime = timestamp => moment(timestamp).format('DD-MM-YYYY');

    upVote = (id) => {
        this.props.upVoteComment(id);
    }
    downVote = (id) => {
        this.props.downVoteComment(id);
    }
    deleteComment = (id) => {
        this.props.deleteComment(id);
    }
    editComment = (comment) => {
        this.props.editComment(comment);
    }
    render() {
        const { comments, checkVoteScore, classes } = this.props;
        return (
            <div>
                <Typography type='body1' className={classes.headerComment}>Comments</Typography>
                {comments.map((comment) => (
                    <div key={comment.id} className={classes.spaceComment}>
                        <Typography type='body1' className={classes.commentAuthor}>
                            {comment.author} says:
                            <small className={classes.dateAuthor}>{this.convertTime(comment.timestamp)}</small>
                        </Typography>
                        <Typography type='body2'>{comment.body}</Typography>
                        <div className={classes.commnetVote}>
                            <Typography type='body1'>{checkVoteScore(comment.voteScore)}</Typography>
                            <IconButton color="accent" onClick={() => this.upVote(comment.id)} >
                                <Icon>mood</Icon>
                            </IconButton>
                            <IconButton  onClick={() => this.downVote(comment.id)}>
                                <Icon>mood_bad</Icon>
                            </IconButton>
                            <Button raised className={classes.buttonDelete} onClick={() => this.deleteComment(comment.id)}>
                                Delete
                            </Button>
                            <Button raised onClick={() => this.editComment(comment)}>
                                Edit
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

CommentComponent.propTypes = {
    comments: PropTypes.array.isRequired,
    checkVoteScore: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
}

const mapDispatchToProps = dispatch => {
    return {
        upVoteComment: id => dispatch(upVoteCommentThunk(id)),
        downVoteComment: id => dispatch(downVoteCommentThunk(id)),
        deleteComment: id => dispatch(deleteCommentThunk(id)),
    }
}

const mapStateToProps = state => {
    return {
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(CommentComponent));