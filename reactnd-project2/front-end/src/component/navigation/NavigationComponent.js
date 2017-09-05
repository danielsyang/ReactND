import React, { Component } from 'react';
import HeaderbarComponent from './HeaderbarComponent';
import SidebarComponent from './SidebarComponent';
import CategoryComponent from '../categories/CategoryComponent';
import './navigation.css';

class NavigationComponent extends Component {
    render() {
        return (
            <div className='navigation-body'>
                <HeaderbarComponent />
                <div className='ajust mdc-toolbar-fixed-adjust'>
                    <SidebarComponent />
                    <CategoryComponent />
                </div>
            </div>
        );
    }
}

export default NavigationComponent;