import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import AvatarComponent from './AvatarComponent';
import './navigation.css';

class SidebarComponent extends Component {

    render() {
        return (
            <Drawer open={this.props.visible} containerClassName='sidebar-index'>
                <AppBar />
                <AvatarComponent />
                <MenuItem>Categories</MenuItem>
                <MenuItem>Posts</MenuItem>
            </Drawer>
        );
    }
}

SidebarComponent.PropTypes = {
    visible: PropTypes.bool.isRequired,
};

export default SidebarComponent;