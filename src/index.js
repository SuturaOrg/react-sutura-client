import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { store } from './helpers';
import { Provider } from 'react-redux';

const app = (
  <BrowserRouter>
      <Provider store={store}>

      <App />
      </Provider>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
