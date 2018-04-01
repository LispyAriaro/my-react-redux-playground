import React, { Component } from 'react';

import { Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

const styles = {
  buttonColorStyles: {
    backgroundColor: '#38465b',
    color: '#ffffff',
    // fontSize: 35,
    // fontWeight: '600',
  },
  cursorStyle: {
    cursor: 'pointer',
  }
};

class BusinessLogin extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Change</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>          
        </Navbar>;

        <div className="col-md-6 col-md-offset-3">
          <div className="form-group input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
            <input className="form-control input-lg" type="text" name='businessAdminEmail' placeholder="Email address" />
          </div>
          <div className="form-group input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
            <input className="form-control input-lg" type="password" name='password' placeholder="Password" />
          </div>

          <div className="form-group">
              <button type="button" className="btn btn-def btn-block btn-lg" style={styles.buttonColorStyles}>
                  <b>Log in</b>
              </button>
          </div>
          <div className="form-group text-center">
              <a style={styles.cursorStyle}>Sign up</a> | <a style={styles.cursorStyle}>Forgot Password</a>
          </div>
        </div>

      </div>
    );
  }
}

export default BusinessLogin;
