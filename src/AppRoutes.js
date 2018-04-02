import React from 'react';

import Home from './containers/Home';
import BusinessLogin from './containers/BusinessLogin';
import BusinessSignup from './containers/BusinessSignup';
import BusinessHome from './containers/BusinessHome';


import { BrowserRouter as Router, Route } from 'react-router-dom';

const AppRoutes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/mc-admin/businesslogin" component={BusinessLogin} />
      <Route path="/mc-admin/businesssignup" component={BusinessSignup} />
      <Route path="/mc-admin/businesshome" component={BusinessHome} />
    </div>
  </Router>
);

export default AppRoutes;