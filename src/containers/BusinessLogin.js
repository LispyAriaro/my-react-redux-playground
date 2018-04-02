import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  loginPage,
  signupPage,
  doLogin
} from '../actions/access'



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
  },
  loadingStyle: {
    marginTop: 0,
    marginBottom: 0
  }
};

class BusinessLogin extends Component {
  constructor(props) {
    super(props);
    
    this.goToSignup = this.goToSignup.bind(this);
    this.attemptLogin = this.attemptLogin.bind(this);    
  }

  goToSignup() {
    this.props.history.push('/mc-admin/businesssignup')
    this.props.signupPage()
  }

  attemptLogin() {
    this.props.doLogin('efeariaroo@gmail.com', 'asdffdsa')
  }

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
        </Navbar>

        { this.props.loginAttempted &&
          <div style={styles.loadingStyle}>
            <div className="dataLoader col-lg-1 col-centered"></div>
          </div>
        }

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
            <button type="button" className="btn btn-def btn-block btn-lg" style={styles.buttonColorStyles} onClick={this.attemptLogin}>
              <b>Log in</b>
            </button>
          </div>

          <div className="form-group text-center">
            <a style={styles.cursorStyle} onClick={this.goToSignup}>Sign up</a> | <a style={styles.cursorStyle}>Forgot Password</a>
          </div>
        </div>
      </div>
    );
  }
}

// export default BusinessLogin;

const mapStateToProps = state => ({
  onLoginPage: state.access.onLoginPage,
  onSignupPage: state.access.onSignupPage,
  onSignupPage: state.access.onSignupPage,
  loginAttempted: state.access.loginAttempted,
  signupAttempted: state.access.signupAttempted  
})

const mapDispatchToProps = dispatch => bindActionCreators({
  signupPage,
  doLogin
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BusinessLogin))
