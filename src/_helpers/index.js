import {Redirect, Route} from "react-router-dom";
import {userService} from "../services";

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
export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                userService.logout();
                console.log(window.location.pathname);
                if(!["/auth-cover-login","/auth-cover-signup"].includes(window.location.pathname)){
                window.location.replace('auth-cover-login')
                }
            }

            const error = (data && data.message) || response.statusText || (data && data.error);
            return Promise.reject(error);
        }

        return data;
    });
}
