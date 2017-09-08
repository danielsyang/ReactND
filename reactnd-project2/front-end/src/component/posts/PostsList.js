import React, { Component } from 'react';
import moment from 'moment';

import './posts.css';

class PostsList extends Component {
    convertTime = timestamp => (moment(timestamp).format('DD-MM-YYYY'));
    render() {
        const { posts } = this.props;
        return (
            <div className='mdc-layout-grid'>
                {
                    posts.map((elem, index) => (
                        <div className='mdc-layout-grid__inner' key={index}>
                            <div className='post-content mdc-layout-grid__cell mdc-layout-grid__cell--span-12'>
                                <h4 className='content-title'>
                                    {elem.title}
                                </h4>
                                <small>
                                    Submitted on {this.convertTime(elem.timestamp)} by {elem.author} to {elem.category} category.
                                </small>
                                <div className='read-more'>
                                    <a href='/'>
                                        Read more                                        
                                    <i className="material-icons">keyboard_arrow_down</i>
                                    </a>
                            </div>

                        </div>

                        </div>

                    ))
                }
            </div>
        );
    }
}

export default PostsList;