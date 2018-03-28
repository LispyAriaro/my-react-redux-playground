import React from 'react';

import Home from './containers/Home';
import BusinessLogin from './containers/BusinessLogin';
import BusinessSignup from './containers/BusinessSignup';


import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Router, Route } from 'react-router-dom';


// const Home = () => <h1>Home</h1>;
// const Admin = () => <h1>Admin</h1>;

const AppRoutes = (history) => (
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/mc-admin/businesslogin" component={BusinessLogin} />
            <Route path="/mc-admin/businessSignup" component={BusinessSignup} />
        </div>
    </Router>
);

export default AppRoutes;