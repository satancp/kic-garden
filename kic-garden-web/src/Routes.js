import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from './Container';
import MainPage from './Pages/MainPage';
import cookie from 'react-cookies';

class Routes extends React.Component {
    constructor() {
        super();
        this.state = {
            hasLogin: false
        };
    }

    componentDidMount() {
        if (cookie.load('login')) {
            this.setState({ hasLogin: true });
        } else {
            this.setState({ hasLogin: false });
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Container>
                        <Route path="/" component={() => <MainPage />} />
                    </Container>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;
