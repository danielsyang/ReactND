import React, { Component } from 'react';
import HeaderbarComponent from './HeaderbarComponent';
import SidebarComponent from './SidebarComponent';

class NavigationComponent extends Component {
    state = {
        visible: false,
    };
    toggleVisibility = () => {
        this.setState({
            visible: !this.state.visible,
        });
    }
    render() {
        return (
            <div>
                <HeaderbarComponent toggleVisibility={this.toggleVisibility} />
                <SidebarComponent toggleVisibility={this.toggleVisibility}
                    visible={this.state.visible} />
            </div>
        );
    }
}

export default NavigationComponent;