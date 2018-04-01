import React from 'react';

import Home from './containers/Home';
import BusinessLogin from './containers/BusinessLogin';
import BusinessSignup from './containers/BusinessSignup';


import { BrowserRouter as Router, Route } from 'react-router-dom';

const AppRoutes = () => (
    <Router>
        <div>
            <Route path="/" component={Home} />
            <Route path="/mc-admin/businesslogin" component={BusinessLogin} />
            <Route path="/mc-admin/businessSignup" component={BusinessSignup} />
        </div>
    </Router>
);

export default AppRoutes;