import {Redirect, Route} from "react-router-dom";

export * from './fake-backend';
export * from './history';
export * from './store';
export * from './auth-header';
export function PrivateRoute ({component: Component, authed, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{pathname: '/index', state: {from: props.location}}} />}
        />
    )
}

