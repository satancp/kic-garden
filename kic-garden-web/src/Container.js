import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Container.css';
import LAN from './strings';
import { ReactComponent as EnIcon } from './assets/en.svg';
import { ReactComponent as CnIcon } from './assets/cn.svg';
import moment from 'moment';

class Container extends Component {
    constructor() {
        super();
    }

    render() {
        const { history, children, currentLan, hasLogin, setLan } = this.props;
        return (
            <div className="kic-garden-web-container">
                <div className="kic-garden-web-header-container">
                    <div className="kic-garden-web-header-left-actions">
                        <div className="kic-garden-web-header-action-single">
                            {currentLan === 'cn' ? (
                                <EnIcon
                                    className="kic-garden-web-header-action-icon"
                                    onClick={() => {
                                        setLan('en');
                                    }}
                                />
                            ) : (
                                <CnIcon
                                    className="kic-garden-web-header-action-icon"
                                    onClick={() => {
                                        setLan('cn');
                                    }}
                                />
                            )}
                        </div>
                    </div>
                    <div
                        className="kic-garden-web-header-titles"
                        onClick={() => {
                            history.push('/');
                        }}>
                        {LAN[currentLan].HEADER.TITLE}
                    </div>
                    <div className="kic-garden-web-header-right-actions">
                        <div className="kic-garden-web-header-action-single" style={{ marginRight: '20px' }}>
                            {LAN[currentLan].HEADER.RIGHT.CALENDAR}
                        </div>
                        <div className="kic-garden-web-header-action-single">{LAN[currentLan].HEADER.RIGHT.LOGIN}</div>
                    </div>
                </div>
                <div className="kic-garden-web-content-container">{children}</div>
                <div className="kic-garden-web-footer-container">
                    <div className="kic-garden-web-footer-copyright">
                        © 2018 - {moment().year()} {LAN[currentLan].FOOTER.COPYRIGHT}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Container);
