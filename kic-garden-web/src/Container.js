import React, { Component } from 'react';
import './Container.css';

export default class Container extends Component {
    render() {
        return (
            <div className="kic-garden-web-container">
                <div className="kic-garden-web-header-container">
                    <div className="kic-garden-web-header-titles">KIC Garden</div>
                </div>
                <div className="kic-garden-web-content-container">{this.props.children}</div>
            </div>
        );
    }
}
