import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  loginPage,
  signupPage
} from '../reducers/counter'

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

        {/* <p>Count: {this.props.count}</p>

        <p>
          <button onClick={this.props.increment} disabled={this.props.isIncrementing}>Increment</button>
          <button onClick={this.props.incrementAsync} disabled={this.props.isIncrementing}>Increment Async</button>
        </p> */}
      </div>
    );
  }
}

Home.propTypes = {
  increment: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  decrementAsync: PropTypes.func.isRequired,
  onLoginPage: PropTypes.bool.isRequired,
  onSignupPage: PropTypes.bool.isRequired
};


// export default Home;

const mapStateToProps = state => ({
  count: state.counter.value,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing,
  onLoginPage: state.counter.onLoginPage,
  onSignupPage: state.counter.onSignupPage
})

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  loginPage, 
  signupPage
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Home))
