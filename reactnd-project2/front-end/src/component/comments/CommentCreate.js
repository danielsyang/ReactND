import React, { Component } from 'react';
import uuid from 'uuid';
import moment from 'moment';
import { connect } from 'react-redux';

import { createCommentThunk } from '../../actions/CommentAction';

class CommentCreate extends Component {
    state = {
        owner: '',
        body: '',
    }

    onOwnerChange = (event) => {
        const owner = event.target.value;
        this.setState({
            owner: owner,
        })
    }

    onBodyChange = (event) => {
        const body = event.target.value;
        this.setState({
            body: body,
        })
    }

    createComment = () => {
        const id = uuid();
        const currentTime = moment().unix();
        const { owner, body } = this.state;
        const { postId } = this.props;
        this.props.createComment({
            id: id,
            timestamp: currentTime,
            body: body,
            owner: owner,
            parentId: postId,
        }).then(() => {
            this.setState({
                owner: '',
                body: '',
            })
        }).catch((erro) => {
            console.log(erro);
        });;
    }

    render() {
        return (
            <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-12'>
                <div className='mdc-layout-grid__cell--span-4'>
                    <div className='mdc-textfield'>
                        <input id='owner' type='text' className='mdc-textfield__input' value={this.state.owner} onChange={this.onOwnerChange} />
                        <label className='mdc-textfield__label mdc-textfield__label--float-above' htmlFor='owner'>Owner</label>
                    </div>
                </div>
                <div className='mdc-layout-grid__cell--span-12'>
                    <div className='mdc-textfield'>
                        <input id='body' type='text' className='mdc-textfield__input' value={this.state.body} onChange={this.onBodyChange} />
                        <label className='mdc-textfield__label mdc-textfield__label--float-above' htmlFor='body'>Body</label>
                    </div>
                </div>
                <button className='mdc-button' onClick={this.createComment}>
                    Comment
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createComment: comment => (dispatch(createCommentThunk(comment))),
    }
};

const mapStateToProps = state => (
    {}
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentCreate);