import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from './Container';
import MainPage from './Pages/MainPage';
import cookie from 'react-cookies';

export default class Routes extends React.Component {
    constructor() {
        super();
        this.state = {
            hasLogin: false,
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
        const { history } = this.props;
        return (
            <BrowserRouter>
                <Switch>
                    <Container>
                        <Route path="/" component={() => <MainPage history={history} />} />
                    </Container>
                </Switch>
            </BrowserRouter>
        );
    }
}
