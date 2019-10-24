import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from './Container';
import MainPage from './Pages/MainPage';
import cookie from 'react-cookies';

class Routes extends React.Component {
    constructor() {
        super();
        this.state = {
            hasLogin: false,
            currentLan: 'en',
        };
        this.setLan = this.setLan.bind(this);
    }

    componentDidMount() {
        if (cookie.load('login')) {
            this.setState({ hasLogin: true });
        } else {
            this.setState({ hasLogin: false });
        }
        if (cookie.load('language')) {
            this.setState({ currentLan: cookie.load('language') });
        } else {
            this.setState({ currentLan: 'en' });
        }
    }

    setLan(lan) {
        cookie.save('language', lan, { path: '/' });
        this.setState({ currentLan: lan });
    }

    render() {
        const { currentLan, hasLogin } = this.state;
        return (
            <BrowserRouter>
                <Switch>
                    <Container currentLan={currentLan} hasLogin={hasLogin} setLan={this.setLan}>
                        <Route path="/" component={() => <MainPage currentLan={currentLan} hasLogin={hasLogin} />} />
                    </Container>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;
