import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';

import { upVotePostThunk, downVotePostThunk, deletePostThunk } from '../../actions/PostAction';
import * as CommentAPI from '../../services/comment';

const styles = theme => ({
    card: {
        minWidth: 275,
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    noDec: {
        display: 'flex',
        marginLeft: 'auto',
        textDecoration: 'none',
    },
});

class PostsList extends Component {
    convertTime = timestamp => (moment(timestamp).format('DD-MM-YYYY'));

    deletePost = (id) => {
        this.props.deletePost(id)
            .then((a) => {
                this.props.history.push('/posts');
                var z = this.props.posts.map(elem => {
                    if (elem.id === a.data.id) {
                        return a.data;
                    }
                    return elem;
                });
                this.props.filter(z);
            }).catch((erro) => {
                console.log(erro);
                console.log('Fuck');
            })
    }
    upVote = (id) => {
        this.props.upVotePost(id)
            .then((a) => {
                this.props.history.push('/posts');
                var z = this.props.posts.map(elem => {
                    if (elem.id === a.data.id) {
                        return a.data;
                    }
                    return elem;
                });
                this.props.filter(z);
            });
    }

    downVote = (id) => {
        this.props.downVotePost(id)
            .then((a) => {
                this.props.history.push('/posts');
                var z = this.props.posts.map(elem => {
                    if (elem.id === a.data.id) {
                        return a.data;
                    }
                    return elem;
                });
                this.props.filter(z);
            });
    }
    componentDidUpdate() {
        var a = this.props.posts.map(elem => {
            if (elem.commentCounter !== undefined) {
                CommentAPI.getCommentCount(elem.id).then(a => {
                    return {
                        ...elem,
                        commentCounter: a.length
                    }
                });
                this.props.filter(a);
            }
            return elem;
        })


    }
    render() {
        const { posts, classes } = this.props;
        return (
            <Grid container spacing={24}>
                {posts.map((elem, index) => (
                    <Grid item xs={12} sm={6} md={6} key={index}>
                        <Card className={classes.card} >

                            <CardContent>
                                <Typography type="headline" component='h2'>
                                    {elem.title}
                                </Typography>
                                <Typography component="p" className={classes.title}>
                                    Submitted on {this.convertTime(elem.timestamp)} by {elem.author} to {elem.category} category.
                                </Typography>
                                <Typography component="p" className={classes.title}>
                                    Vote score: {elem.voteScore}
                                </Typography>
                                <Typography component="p" className={classes.title}>
                                    Comment: {elem.commentCounter}
                                </Typography>
                                <CardActions>
                                    <Link to={'/post/' + elem.id} className={classes.noDec}>
                                        <Button dense>Read more</Button>
                                    </Link>
                                    <Link to={'/post/' + elem.id + '/edit'} className={classes.noDec}>
                                        <Button dense>Edit</Button>
                                    </Link>
                                    <Button dense onClick={() => this.deletePost(elem.id)}>Delete</Button>
                                    <Button onClick={() => this.upVote(elem.id)} className={classes.noDec}>
                                        Upvote
                                    </Button>
                                    <Button onClick={() => this.downVote(elem.id)} className={classes.noDec}>
                                        DownVote
                                    </Button>
                                </CardActions>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        upVotePost: id => dispatch(upVotePostThunk(id)),
        downVotePost: id => dispatch(downVotePostThunk(id)),
        deletePost: id => dispatch(deletePostThunk(id)),
    }
};

const mapStateToProps = state => {
    return {
    }
};

PostsList.propTypes = {
    posts: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(withStyles(styles)(PostsList)));