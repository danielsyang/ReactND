import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import { fetchCategoriesThunk } from '../../actions/CategoryAction';
import { createPostThunk, getPostThunk, editPostThunk } from '../../actions/PostAction';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    centerItem: {
        margin: 'auto',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '100%',
    },
});

class PostsCreate extends Component {
    state = {
        id: '',
        title: '',
        owner: '',
        category: '',
        body: '',
    }
    componentWillMount() {
        this.props.loadCategories();
    }

    componentDidMount() {
        const idPost = this.props.postId;
        if (idPost) {
            this.setState({
                id: idPost,
            });
            this.props.loadPost(idPost).then((response) => {
                this.setState({
                    title: response.data.title,
                    owner: response.data.author,
                    body: response.data.body,
                    category: response.data.category,
                });
            });
        }
    }

    onTitleChange = (event) => {
        const title = event.target.value;
        this.setState({
            title: title,
        });
    };

    onOwnerChange = (event) => {
        const owner = event.target.value;
        this.setState({
            owner: owner,
        });
    };

    onBodyChange = (event) => {
        const body = event.target.value;
        this.setState({
            body: body,
        });
    };

    onCategoryChange = (event) => {
        const name = event.target.value;
        this.setState({
            category: name,
        });
    };

    createPost = () => {
        const id = uuid();
        const currentTime = moment().unix();
        const { title, owner, category, body } = this.state;
        this.props.create({
            id: id,
            timestamp: currentTime,
            title: title,
            body: body,
            owner: owner,
            category: category.name,
        }).then(() => {
            this.props.history.push('/posts');
        }).catch((erro) => {
            console.log(erro);
        });
    };

    editPost = () => {
        const { title, owner, category, body } = this.state;
        this.props.edit({
            id: this.props.selectedPost.id,
            title: title,
            body: body,
            owner: owner,
            category: category.name,
        }).then(() => {
            this.props.history.push('/posts');
        }).catch((erro) => {
            console.log(erro);
        });        
    }

    render() {
        const { categories, classes, postId } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12} md={8} classes={{
                        typeItem: classes.centerItem,
                    }}>
                        <Grid container spacing={24}>
                            <Grid item xs={4} >
                                <TextField
                                    label="Title"
                                    placeholder="Title"
                                    className={classes.textField}
                                    margin="normal"
                                    value={this.state.title}
                                    onChange={this.onTitleChange}
                                />
                            </Grid>
                            <Grid item xs={4} >
                                <TextField
                                    label="Owner"
                                    placeholder="Owner"
                                    className={classes.textField}
                                    margin="normal"
                                    value={this.state.owner}
                                    onChange={this.onOwnerChange}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <select id='category' type='text' onChange={this.onCategoryChange}>
                                    <option value=''>Pick one category</option>
                                    {categories.map((elem, index) => (
                                        <option key={index} value={elem.name}>{elem.name}</option>
                                    ))}
                                </select>
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    id="multiline-flexible"
                                    label="Body"
                                    multiline
                                    rowsMax="4"
                                    value={this.state.body}
                                    onChange={this.onBodyChange}
                                    className={classes.textField}
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                {postId === undefined && <Button raised color="primary" onClick={this.createPost}>
                                    Create
                                </Button>}

                                {postId !== undefined && <Button raised color="primary" onClick={this.createPost}>
                                    Edit
                                </Button>}

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCategories: () => (dispatch(fetchCategoriesThunk())),
        loadPost: (id) => (dispatch(getPostThunk(id))),
        create: post => dispatch(createPostThunk(post)),
        edit: post => dispatch(editPostThunk(post)),
    }
};

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        selectedPost: state.selectedPost,
    }
};

PostsCreate.propTypes = {
    classes: PropTypes.object.isRequired,
    postId: PropTypes.string,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(
    withStyles(styles)(PostsCreate)
));