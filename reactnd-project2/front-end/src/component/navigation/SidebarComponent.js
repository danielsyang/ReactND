import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemText } from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';
import { withStyles } from 'material-ui/styles';

const drawerWidth = 264;

const styles = theme => ({
    drawerHeader: {
        height: 64,
        backgroundColor: '#3f51b5',
        boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
    },
    drawerPaper: {
        width: 250,
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            position: 'fixed',
            height: '100%',
        },
    },
    linkRoot: {
        padding: '20px 18px',
    },
})

class SidebarComponent extends Component {

    toggle = () => {
        console.log('asdasd');
        this.props.handleDrawerToggle()
    }

    render() {
        const { mobileOpen, classes, isMobile } = this.props;
        return (
            <Drawer
                type={isMobile ? 'temporary' : 'permanent'}
                open={mobileOpen}
                classes={{
                    paper: classes.drawerPaper,
                }}
                onRequestClose={this.toggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
                <div className={classes.drawerHeader} />
                <ListItem button classes={{ root: classes.linkRoot, }} component={Link} to={'/category'}>
                    <Icon>language</Icon>
                    <ListItemText primary='Categories' />
                </ListItem>
                <Divider />
                <ListItem button classes={{ root: classes.linkRoot, }} component={Link} to={'/'}>
                    <Icon>move_to_inbox</Icon>
                    <ListItemText primary='Posts' />
                </ListItem>                
            </Drawer>
        );
    }
}

SidebarComponent.propTypes = {
    isMobile: PropTypes.bool.isRequired,
    mobileOpen: PropTypes.bool.isRequired,
    handleDrawerToggle: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SidebarComponent);