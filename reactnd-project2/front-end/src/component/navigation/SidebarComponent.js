import React, { Component } from 'react';

import './navigation.css';

class SidebarComponent extends Component {

    render() {
        return (
            <nav className='mdc-permanent-drawer'>
                <div className='mdc-list-group'>
                    <div className='mdc-list'>
                        <a className='mdc-list-item' href='/teste'>Categories</a>
                        <a className='mdc-list-item' href='/teste'>Post</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default SidebarComponent;