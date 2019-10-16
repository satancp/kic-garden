import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Container.css';
import { ReactComponent as EnIcon } from './assets/en.svg';
import { ReactComponent as CnIcon } from './assets/cn.svg';

class Container extends Component {
    constructor() {
        super();
        this.state = {
            currentLan: 'en'
        };
    }

    render() {
        const { history, children } = this.props;
        const { currentLan } = this.state;
        return (
            <div className="kic-garden-web-container">
                <div className="kic-garden-web-header-container">
                    <div className="kic-garden-web-header-left-actions">
                        <div className="kic-garden-web-header-action-single">
                            {currentLan === 'cn' ? (
                                <EnIcon
                                    className="kic-garden-web-header-action-icon"
                                    onClick={() => {
                                        this.setState({
                                            currentLan: 'en'
                                        });
                                    }}
                                />
                            ) : (
                                <CnIcon
                                    className="kic-garden-web-header-action-icon"
                                    onClick={() => {
                                        this.setState({
                                            currentLan: 'cn'
                                        });
                                    }}
                                />
                            )}
                        </div>
                    </div>
                    <div
                        className="kic-garden-web-header-titles"
                        onClick={() => {
                            history.push('/');
                        }}
                    >
                        KIC Garden
                    </div>
                    <div className="kic-garden-web-header-right-actions">
                        <div className="kic-garden-web-header-action-single" style={{ marginRight: '20px' }}>
                            Calendar
                        </div>
                        <div className="kic-garden-web-header-action-single">Login</div>
                    </div>
                </div>
                <div className="kic-garden-web-content-container">{children}</div>
            </div>
        );
    }
}

export default withRouter(Container);
