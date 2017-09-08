import React, { Component } from 'react';

import './navigation.css';

class SidebarComponent extends Component {

    render() {
        return (
            <nav className='mdc-permanent-drawer'>
                <div className='mdc-list-group'>
                    <div className='mdc-list'>
                        <div className='mdc-list'>
                            <a className='mdc-list-item' href='/'>Categories</a>

                            <li className='mdc-list-divider'></li>
                            <a className='mdc-list-item' href='/posts'>Post</a>

                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default SidebarComponent;