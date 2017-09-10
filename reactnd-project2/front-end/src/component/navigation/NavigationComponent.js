import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HeaderbarComponent from './HeaderbarComponent';
import SidebarComponent from './SidebarComponent';
import CategoryComponent from '../categories/CategoryComponent';
import PostsComponent from '../posts/PostsComponent';
import PostsCreate from '../posts/PostsCreate';
import './navigation.css';

class NavigationComponent extends Component {
    render() {
        return (
            <div className='navigation-body'>
                <HeaderbarComponent />
                <div className='ajust mdc-toolbar-fixed-adjust'>
                    <SidebarComponent />
                    <Route exact path='/' render={() => (
                        <CategoryComponent />
                    )} />
                    <Route exact path='/posts' render={() => (
                        <PostsComponent />
                    )} />
                    <Route exact path='/create' render={() => (
                        <PostsCreate />
                    )} />
                </div>
            </div>
        );
    }
}

export default NavigationComponent;