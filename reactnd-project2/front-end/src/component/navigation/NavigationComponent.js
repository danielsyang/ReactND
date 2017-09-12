import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HeaderbarComponent from './HeaderbarComponent';
import SidebarComponent from './SidebarComponent';
import CategoryComponent from '../categories/CategoryComponent';
import PostsComponent from '../posts/PostsComponent';
import PostsCreate from '../posts/PostsCreate';
import PostsDetail from '../posts/PostsDetail';
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
                    <Route exact path='/create' render={() => (
                        <PostsCreate />
                    )} />
                    <Route path='/posts/:id' render={(id) => (
                        <PostsDetail postId={id} />
                    )} />
                    <Route path='/:category' render={(category) => (
                        <PostsComponent category={category}/>
                    )} />
                </div>
            </div>
        );
    }
}

export default NavigationComponent;