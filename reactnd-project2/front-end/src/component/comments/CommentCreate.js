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

import { createCommentThunk } from '../../actions/CommentAction';

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
            owner: owner,
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
                        multiline
                        margin="normal"
                        value={this.state.body}
                        onChange={this.onBodyChange}
                    />
                    <Button raised color="primary" onClick={this.createComment} className={classes.button}>
                    Comment
                    </Button>
                </Grid>
            </Grid >
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createComment: comment => (dispatch(createCommentThunk(comment))),
    }
};

const mapStateToProps = state => (
    {}
)

CommentCreate.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(CommentCreate));