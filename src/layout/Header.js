import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../logo.svg';

class Header extends Component {
  render() {
    return (
      <header>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Todo List
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Made By <a href="https://wormwlrm.github.io" target="_blank">wormwlrm</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
