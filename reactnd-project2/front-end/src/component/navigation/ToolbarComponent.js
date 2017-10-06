import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';

const drawerWidth = 264;

const styles = theme => ({
    appBar: {
        position: 'absolute',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
});

class ToolbarComponent extends Component {
    toggle = () => {
        this.props.handleDrawerToggle();
    }
    render() {
        const { classes, title } = this.props;
        return (
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="contrast"
                        aria-label="open drawer"
                        onClick={this.toggle}
                        className={classes.navIconHide}>
                        <Icon>menu</Icon>
                    </IconButton>
                    <Typography type="title" color="inherit" noWrap>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

ToolbarComponent.propTypes = {
    title: PropTypes.string.isRequired,
    handleDrawerToggle: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ToolbarComponent);