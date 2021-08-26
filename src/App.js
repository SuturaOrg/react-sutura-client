import React, {Component, Suspense} from "react";
import Layout from "./components/Layout/";
import {
    Switch,
    BrowserRouter as Router,
    withRouter, Redirect, Route,
} from "react-router-dom";
import {history, PrivateRoute} from './_helpers';

// Import Css
import "./assets/css/materialdesignicons.min.css";
import "./Apps.scss";

import "./assets/css/colors/default.css";

// Include Routes
import routes from "./routes";
import {connect} from "react-redux";
import {Alert} from "reactstrap";
import {alertActions} from "./actions";

function withLayout(WrappedComponent, hasDarkTopBar) {
    // ...and returns another component...
    return class extends React.Component {
        render() {
            return (
                <Layout hasDarkTopBar={hasDarkTopBar}>
                    <WrappedComponent></WrappedComponent>
                </Layout>
            );
        }
    };
}

class App extends Component {
    constructor(props) {
        super(props);
        const {dispatch} = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    Loader = () => {
        return (
            <div id="preloader">
                <div id="status">
                    <div className="spinner">
                        <div className="double-bounce1"></div>
                        <div className="double-bounce2"></div>
                    </div>
                </div>
            </div>
        );
    };
    x

    render() {
        const {alert, loggedIn} = this.props;
        console.log(loggedIn);
        return (
            <React.Fragment>
                {alert.message &&
                <Alert
                    color={alert.type}
                >
                    {alert.message}
                </Alert>
                }
                <Router>
                    <Suspense fallback={this.Loader()}>

                        <Switch>
                            {routes.map((route, idx) =>
                                !route.isPrivate ?
                                    route.isWithoutLayout ? (
                                        <Route
                                            path={route.path}
                                            exact={route.exact}
                                            component={route.component}
                                            key={idx}
                                        />
                                    ) : (
                                        <Route
                                            path={route.path}
                                            exact
                                            component={withLayout(route.component, route.isTopbarDark)}
                                            key={idx}
                                        />
                                    )
                                    :
                                    route.isWithoutLayout ? (
                                        <PrivateRoute
                                            authed={loggedIn}
                                            path={route.path}
                                            exact={route.exact}
                                            component={route.component}
                                            key={idx}
                                        />
                                    ) : (
                                        <PrivateRoute
                                            authed={loggedIn}
                                            path={route.path}
                                            exact
                                            component={withLayout(route.component, route.isTopbarDark)}
                                            key={idx}
                                        />
                                    )
                            )}
                        </Switch>
                    </Suspense>
                </Router>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    const {alert} = state;
    const {loggedIn} = state.authentication;
    return {
        loggedIn,
        alert
    };
}

const connectedApp = connect(mapStateToProps)(withRouter(App));
export default connectedApp;
