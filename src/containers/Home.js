import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  loginPage,
  signupPage
} from '../actions/access'

// import Button from 'react-bootstrap/lib/Button';
// or
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Carousel } from 'react-bootstrap';
import { FieldGroup, FormControl, FormGroup, Checkbox, Radio, Button, ControlLabel } from 'react-bootstrap';

import '../css/homePageStyles.css';



function handleSelect(selectedKey) {
  alert(`selected ${selectedKey}`);
}

class Home extends Component {
  constructor(props) {
    super(props);
    
    this.goToLogin = this.goToLogin.bind(this);
    this.goToSignup = this.goToSignup.bind(this);    
  }

  goToLogin() {
    this.props.history.push('/mc-admin/businesslogin')
    this.props.loginPage()
  }

  goToSignup() {
    this.props.history.push('/mc-admin/businesssignup')
    this.props.signupPage()
  }

  render() {
    const onLoginPage = this.props.onLoginPage;
    
    const button = !onLoginPage ? (
      <NavItem eventKey={1} href="#" onSelect={this.goToLogin}>Login</NavItem>
    ) : (
      <NavItem eventKey={2} href="#" onSelect={this.goToSignup}>Signup</NavItem>
    );

    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Change</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          
          <Navbar.Collapse>
            <Nav pullRight>
              {/* <NavItem eventKey={1} href="#" onSelect={this.goToLogin}>Login</NavItem>
              <NavItem eventKey={2} href="#" onSelect={this.goToSignup}>Signup</NavItem> */}
              {button}
            </Nav>
          </Navbar.Collapse>
        </Navbar>;
      </div>
    );
  }
}

Home.propTypes = {
  onLoginPage: PropTypes.bool.isRequired,
  onSignupPage: PropTypes.bool.isRequired
};


// export default Home;

const mapStateToProps = state => ({
  onLoginPage: state.access.onLoginPage,
  onSignupPage: state.access.onSignupPage
})

const mapDispatchToProps = dispatch => bindActionCreators({
  loginPage, 
  signupPage
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Home))
