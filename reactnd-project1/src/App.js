import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Reads from './components/reads/Reads.js';
import Header from './components/header/Header.js';
import AddRead from './components/reads/AddRead';
import Messages from './components/messages/Messages';

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            message: '',
            title: '',
            show: false,
        };
    }

    onChangeMessages = (message, title) => {
        this.setState({
            message: message,
            title: title,
            show: true,
        });
    }

    hideMessage = () => {
        if (this.state.show) {
            this.setState({
                show: false,
            });
        }
    }

    render() {
        return (
            <div className='app'>
                <div className='list-books'>
                    <Header />
                    <Route exact path='/' render={() => (
                        <Reads changeMessages={this.onChangeMessages} />
                    )} />

                    <Route exact path='/search' render={() => (
                        <AddRead />
                    )} />

                    <Messages message={this.state.message} title={this.state.title} show={this.state.show} hideMessage={this.hideMessage} />
                </div>
            </div>
        );
    }
}

export default App;
