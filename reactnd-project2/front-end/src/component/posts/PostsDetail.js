import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPostServer } from '../../actions/PostAction';
import './posts.css';

class PostsDetail extends Component {
    componentWillMount() {
        const id = this.props.postId.match.params.id;
    }
    render() {
        console.log(this.props);
        return (
            <div className='post-detail'>
                <div className='mdc-layout-grid'>
                    <div className='mdc-layout-grid__inner'>
                        Hello
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        get: id => dispatch(getPostServer(id)),
    }
};

const mapStateToProps = state => {
    return {
        post: state.selectedPost
    }    
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(PostsDetail);