import React, { Component } from 'react';
import './ListHeader.css';

class ListHeader extends Component {
    render() {
        return (
            <header className="header">
                <h1 className="header__title">
                    List of the coins
                </h1>
            </header>
        );
    }
}

export default ListHeader;