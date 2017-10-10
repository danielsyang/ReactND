import React, { Component } from 'react';
import uuid from 'uuid';
import moment from 'moment';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import { createCommentThunk, editCommentThunk } from '../../actions/CommentAction';

const styles = theme => ({
    typeContainer: {
        flexDirection: 'column',
        marginTop: 30,
    },
    typeItem: {
        display: 'flex',
        flexDirection: 'column'
    },
    button: {
        width: '25%',
        marginLeft: 'auto',
    }
});

class CommentCreate extends Component {
    state = {
        owner: '',
        body: '',
        comment: {},
    }

    onOwnerChange = (event) => {
        const owner = event.target.value;
        this.setState({
            owner: owner,
        })
    }

    onBodyChange = (event) => {
        const body = event.target.value;
        this.setState({
            body: body,
        })
    }

    createComment = () => {
        const id = uuid();
        const currentTime = moment().unix();
        const { owner, body } = this.state;
        const { postId } = this.props;
        this.props.createComment({
            id: id,
            timestamp: currentTime,
            body: body,
            author: owner,
            parentId: postId,
        }).then(() => {
            this.setState({
                owner: '',
                body: '',
            })
        }).catch((erro) => {
            console.log(erro);
        });;
    }

    editComment = () => {
        const { owner, body, comment } = this.state;
        const newComment = Object.assign(comment, { author: owner, body });
        this.props.editComment(newComment).then(() => {
            // console.log('asd');            
        }).catch(error => {
            console.log(error);
        })

    }

    componentDidUpdate() {
        const newComment = this.props.comment;

        if (newComment !== undefined && newComment.id !== this.state.comment.id) {
            this.setState({
                owner: newComment.author,
                body: newComment.body,
                comment: newComment,
            });
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid container spacing={24} className={classes.typeContainer}>
                <Typography>Create Comment</Typography>
                <Grid item xs={3} className={classes.typeItem}>
                    <TextField
                        label="Owner"
                        placeholder="Owner"
                        margin="normal"
                        value={this.state.owner}
                        onChange={this.onOwnerChange}
                    />
                    <TextField
                        label="Body"
                        placeholder="Body"
                        margin="normal"
                        value={this.state.body}
                        onChange={this.onBodyChange}
                    />
                    {this.state.comment.id === undefined && <Button raised color="primary" onClick={this.createComment} className={classes.button}>
                        Comment
                    </Button>}

                    {this.state.comment.id && <Button raised color="primary" onClick={this.editComment} className={classes.button}>
                        Edit
                    </Button>}


                </Grid>
            </Grid >
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createComment: comment => (dispatch(createCommentThunk(comment))),
        editComment: comment => (dispatch(editCommentThunk(comment))),
    }
};

const mapStateToProps = state => (
    {}
)

CommentCreate.propTypes = {
    postId: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    comment: PropTypes.object,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(CommentCreate));