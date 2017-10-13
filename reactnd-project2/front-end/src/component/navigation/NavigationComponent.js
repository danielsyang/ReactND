import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Hidden from 'material-ui/Hidden';

import SidebarComponent from './SidebarComponent';
import ToolbarComponent from './ToolbarComponent';
import CategoryComponent from '../categories/CategoryComponent';
import PostsComponent from '../posts/PostsComponent';
import PostsCreate from '../posts/PostsCreate';
import PostsDetail from '../posts/PostsDetail';

const drawerWidth = 264;

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
    },
    appFrame: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    content: {
        width: '100%',
        padding: theme.spacing.unit * 3,
        height: 'calc(100% - 56px)',
        marginTop: 56,
        [theme.breakpoints.up('md')]: {
            marginLeft: drawerWidth,
        },
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 64px)',
            marginTop: 64,
        },
    },
});

class NavigationComponent extends Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState({ mobileOpen: !this.state.mobileOpen });
    };
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <ToolbarComponent handleDrawerToggle={this.handleDrawerToggle} title='Readable' />
                    <Hidden mdUp>
                        <SidebarComponent mobileOpen={this.state.mobileOpen} handleDrawerToggle={this.handleDrawerToggle} isMobile={true} />
                    </Hidden>
                    <Hidden mdDown implementation="css">
                        <SidebarComponent mobileOpen={true} handleDrawerToggle={this.handleDrawerToggle} isMobile={false} />
                    </Hidden>
                    <main className={classes.content}>
                        <Switch>
                            <Route exact path='/' render={(category) => (
                                <PostsComponent category={category} />
                            )} />
                            <Route exact path='/category' render={() => (
                                <CategoryComponent />
                            )} />
                            <Route exact path='/create' render={() => (
                                <PostsCreate />
                            )} />
                            <Route path='/post/:id/edit' render={(id) => (
                                <PostsCreate postId={id.match.params.id} />
                            )} />
                            <Route path='/post/:id' render={(id) => (
                                <PostsDetail postId={id} />
                            )} />
                            <Route path='/:category' render={(category) => (
                                <PostsComponent category={category} />
                            )} />
                        </Switch>
                    </main>
                </div>
            </div>
        );
    }
}

NavigationComponent.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NavigationComponent);