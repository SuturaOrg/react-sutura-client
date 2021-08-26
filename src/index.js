import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {BrowserRouter} from "react-router-dom";
import {store} from './_helpers';
import {Provider} from 'react-redux';

const app = (
    <Provider store={store}>
        <BrowserRouter forceRefresh={true}>
            <App/>
        </BrowserRouter>
    </Provider>

);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
