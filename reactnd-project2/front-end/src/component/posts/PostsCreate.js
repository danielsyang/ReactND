import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';
import Button from 'material-ui/Button';

import { fetchCategoriesThunk } from '../../actions/CategoryAction';
import { createPostThunk } from '../../actions/PostAction';

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
        title: '',
        owner: '',
        category: {},
        body: '',
    }
    componentWillMount() {
        this.props.loadCategories();
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
        const index = event.target.value;
        const cat = this.props.categories[index];
        this.setState({
            category: cat,
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

    render() {
        const { categories, classes } = this.props;
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
                                <InputLabel htmlFor='category'>Category</InputLabel>
                                <Select
                                    value={this.state.category}
                                    onChange={this.onCategoryChange}
                                    input={<Input id='category' />} >
                                    <MenuItem value=''>
                                        <em>None</em>
                                    </MenuItem>
                                    {categories.map((elem, index) => (
                                        <MenuItem key={index} value={index}>{elem.name}</MenuItem>
                                    ))}
                                </Select>
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
                                <Button raised color="primary" onClick={this.createPost}>
                                    Create
                                </Button>
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
        create: post => dispatch(createPostThunk(post)),
    }
};

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
    }
};

PostsCreate.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(
    withStyles(styles)(PostsCreate)
));