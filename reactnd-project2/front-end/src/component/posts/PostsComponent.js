import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import PostsList from './PostsList';
import { fetchPostsThunk, fetchPostCategoryThunk, loadPosts } from '../../actions/PostAction';

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

    configureState() {
        const cat = this.props.category.match.params.category;
        this.setState({
            type: cat,
        });
    }

    getData(cat) {        
        if (cat === 'posts' || cat === undefined) {
            this.props.loadPosts();
        } else {
            this.props.loadPostsCategory(cat);
        }
    }
    componentWillReceiveProps(props) {
        const cat = props.category.match.params.category;
        if (cat !== this.state.type) {
            this.setState({
                type: cat,
            });
            this.getData(cat);
        }
    }
    componentDidMount() {
        const typeCat = this.state.type;
        this.getData(typeCat);
    }
    componentWillMount() {
        this.configureState();
    }

    sortDate = () => {
        const { posts } = this.props;
        const sort = posts.sort((a, b) => {
            return a.timestamp - b.timestamp                
        });
        this.props.filter(sort);

    }
    sortVote = () => {
        const { posts } = this.props;
        const sort = posts.sort((a, b) => {
            return a.voteScore - b.voteScore                
        });
        this.props.filter(sort);
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
                            Sort by: <Button dense onClick={this.sortVote}>Vote</Button><Button dense onClick={this.sortDate}>Date</Button>
                        </Grid>

                        <PostsList posts={posts} filter={this.props.filter}/>

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
        filter: data => dispatch(loadPosts(data)),
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