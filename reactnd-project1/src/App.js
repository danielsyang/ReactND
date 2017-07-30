import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Reads from './components/reads/Reads.js';
import Header from './components/header/Header.js';
import AddRead from './components/reads/AddRead';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <div className='list-books'>
                    <Header />
                    <Route exact path='/' render={() => (
                        <Reads />
                    )} />

                    <Route exact path='/add' render={() => (
                        <AddRead />
                    )} />
                </div>
            </div>
        );
    }
}

export default App;
