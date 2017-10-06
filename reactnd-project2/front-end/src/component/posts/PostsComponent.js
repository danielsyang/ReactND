import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import './posts.css';
import PostsList from './PostsList';
import { fetchPostsThunk, fetchPostCategoryThunk } from '../../actions/PostAction';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    innerTypeItem: {
        margin: 'auto',
    },
    noDec: {
        textDecoration: 'none',
    }
});

class PostsComponent extends Component {
    state = {
        type: '',
    }
    componentDidMount() {
        const typeCat = this.state.type;
        if (typeCat === 'posts') {
            this.props.loadPosts();
        } else {
            this.props.loadPostsCategory(typeCat);
        }
    }
    componentWillMount() {
        const cat = this.props.category.match.params.category;
        this.setState({
            type: cat,
        });
    }
    render() {
        const { posts, classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={8} classes={{
                        typeItem: classes.innerTypeItem,
                    }}>
                        <Grid container spacing={24}>
                            <Grid item xs={6} >
                                <Typography type='headline' component='h1'>
                                    Category: {this.state.type}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Link to='/create' className={classes.noDec}>
                                    <Button raised color="primary">
                                        Create post
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                        
                            <PostsList posts={posts} />
                        
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadPosts: () => dispatch(fetchPostsThunk()),
        loadPostsCategory: cat => dispatch(fetchPostCategoryThunk(cat)),
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
}
PostsComponent.propTypes = {
    category: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(PostsComponent));