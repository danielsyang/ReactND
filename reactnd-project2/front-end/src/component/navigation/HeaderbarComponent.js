import React, { Component } from 'react';

class HeaderbarComponent extends Component {
    render() {
        return (
            <header className='mdc-toolbar mdc-toolbar--fixed'>
                <div className='mdc-toolbar__row'>
                    <section className='mdc-toolbar__section mdc-toolbar__section--align-start'>
                        <span className='mdc-toolbar__title'>Readable</span>
                    </section>
                </div>
            </header>
        );
    }
}

export default HeaderbarComponent;