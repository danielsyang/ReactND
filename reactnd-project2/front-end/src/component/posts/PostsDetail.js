import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import { withRouter } from 'react-router-dom';

import CommentComponent from '../comments/CommentComponent';
import CommentCreate from '../comments/CommentCreate';
import { getPostThunk, upVotePostThunk, downVotePostThunk, deletePostThunk } from '../../actions/PostAction';
import { fetchCommentsPostThunk } from '../../actions/CommentAction';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    paperInner: {
        margin: 'auto',
    },
    rootPapper: {
        padding: 16,
        marginTop: theme.spacing.unit * 3,
    },
    paperText: {
        display: 'flex',
        flexDirection: 'column',
    },
    papperAuthor: {
        textAlign: 'right',
    },
    paperTextContent: {
        padding: 16,
    },
    paperVote: {
        display: 'flex',
        margin: 'auto',
        alignItems: 'center',
    },
    buttonDelete: {
        backgroundColor: '#ff0000',
        '&:hover': {
            backgroundColor: '#6d1010',
        }
    }
});

class PostsDetail extends Component {
    state = {
        id: '',
        commnetId: undefined,
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
                this.props.history.push('/posts');
            }).catch((erro) => {
                console.log(erro);
                console.log('Fuck');
            })
    }

    editComment = (comment) => {
        this.setState({
            comment: comment,
        });
        console.log(comment);
        
    }

    convertTime = timestamp => moment(timestamp).format('DD-MM-YYYY');

    render() {
        const { post, comments, classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12} md={8} classes={{
                        typeItem: classes.paperInner,
                    }}>
                        <Paper className={classes.rootPapper} elevation={4}>

                            {(!post.error && post.id !== undefined) &&
                                <div>
                                    <div className={classes.paperText}>
                                        <Typography type="display2" component="h2">
                                            {post.title}
                                        </Typography>

                                        <small className={classes.papperAuthor}>
                                            Created at {this.convertTime(post.timestamp)} by {post.author} in <a href='/react' className='no-decoration'> {post.category}</a>
                                        </small>

                                        <Typography type="body1" component="p" className={classes.paperTextContent}>
                                            {post.body}
                                        </Typography>

                                        <div className={classes.paperVote}>
                                            <Typography type="body1" component="h2">
                                                {this.checkVoteScore(post.voteScore)}
                                            </Typography>
                                            <IconButton color="accent" onClick={this.upVote} className={classes.buttonIcon}>
                                                <Icon>mood</Icon>
                                            </IconButton>
                                            <IconButton onClick={this.downVote} className={classes.buttonIcon}>
                                                <Icon>mood_bad</Icon>
                                            </IconButton>
                                            <Button raised className={classes.buttonDelete} onClick={this.deletePost}>
                                                Delete
                                            </Button>
                                            <Link to={post.id + '/edit'}>
                                                <Button raised>
                                                    Edit
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>

                                    <Divider />

                                    <CommentComponent comments={comments} checkVoteScore={this.checkVoteScore} editComment={this.editComment} />

                                    <CommentCreate postId={post.id} comment={this.state.comment} />
                                </div>
                            }
                            {(post.error || post.id === undefined) && <Typography type="display2" component="h2">
                                Id does not exist.
                                </Typography>
                            }
                        </Paper>
                    </Grid>
                </Grid>
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
)(withRouter(withStyles(styles)(PostsDetail)));