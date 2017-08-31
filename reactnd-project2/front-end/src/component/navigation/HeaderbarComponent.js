import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';

class HeaderbarComponent extends Component {
    render() {
        return (
            <AppBar
                title='Readable'
                onLeftIconButtonTouchTap={this.props.toggleVisibility} />
        );
    }
}

HeaderbarComponent.propTypes = {
    toggleVisibility: PropTypes.func.isRequired,
}

export default HeaderbarComponent;