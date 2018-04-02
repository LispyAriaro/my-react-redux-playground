import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// import {
//   loginPage,
//   signupPage,
//   doLogin
// } from '../actions/access'

import { Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';


const styles = {
  buttonColorStyles: {
    backgroundColor: '#38465b',
    color: '#ffffff'
  },
  cursorStyle: {
    cursor: 'pointer',
  },
  loadingStyle: {
    marginTop: 0,
    marginBottom: 0
  }
};

class BusinessHome extends Component {
  constructor(props) {
    super(props);
    
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    // this.props.history.push('/mc-admin/businesslogin')
    // this.props.loginPage()
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

          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#" onSelect={this.logOut}>Log Out</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        home
      </div>
    );
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BusinessHome))
