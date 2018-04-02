import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  loginPage,
  signupPage
} from '../actions/access'


import { Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

const styles = {
  buttonColorStyles: {
    backgroundColor: '#38465b',
    color: '#ffffff'
  },
  cursorStyle: {
    cursor: 'pointer',
  }
};

class BusinessSignup extends Component {
  constructor(props) {
    super(props);
    
    this.goToLogin = this.goToLogin.bind(this);
  }

  goToLogin() {
    this.props.history.push('/mc-admin/businesslogin')
    this.props.loginPage()
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

        <div className="col-md-6 col-md-offset-3">
          <div className="form-group input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
            <input className="form-control input-lg" type="text" name='businessAdminBusinessName' placeholder="Business Name" />
          </div>

          <div className="form-group input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
            <input className="form-control input-lg" type="text" name='businessAdminFirstName' placeholder="First Name" />
          </div>

          <div className="form-group input-group">
            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
            <input className="form-control input-lg" type="text" name='businessAdminLastName' placeholder="Last Name" />
          </div>



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
              <b>Sign up your business</b>
            </button>
          </div>

          <div className="form-group text-center">
            <a style={styles.cursorStyle} onClick={this.goToLogin}>Log In</a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  onLoginPage: state.access.onLoginPage,
  onSignupPage: state.access.onSignupPage
})

const mapDispatchToProps = dispatch => 
  bindActionCreators({
    loginPage
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BusinessSignup))
