import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Messages.css';

class Messages extends Component {

    componentDidUpdate() { 
        console.log('curioso')       
        setTimeout(() => {
            this.props.hideMessage();
        }, 1000);

    }

    render() {
        return (
            <div className={this.props.show ? 'messages-class' : 'messages-class messages-hide'}>
                <h4 className='header-class'>{this.props.title}</h4>
                <p className='text-class'>{this.props.message}</p>
            </div>
        )
    }
}

Messages.propTypes = {
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    hideMessage: PropTypes.func.isRequired,
}

export default Messages;