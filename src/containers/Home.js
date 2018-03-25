import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div>
            No change to give a customer? We help record how much change is owed.
            <div className="">
                <Link to="/mc-admin/businesslogin">Log in</Link>
                <Link to="/mc-admin/businessSignup">Sign up</Link>
            </div>
        </div>
    );
  }
}

export default Home;
