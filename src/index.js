import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.css';
import AppRoutes from './AppRoutes';

var mountNode = document.getElementById("app");
ReactDOM.render(<AppRoutes />, mountNode);
