import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRoutes from './AppRoutes';
import store, { history } from './store'

import './css/app.css';


var mountNode = document.getElementById("app");
// ReactDOM.render(<AppRoutes />, mountNode);


ReactDOM.render(
    <Provider store={store}>
        <AppRoutes />
    </Provider>, mountNode);
