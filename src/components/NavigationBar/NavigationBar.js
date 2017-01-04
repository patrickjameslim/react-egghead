import React, { Component } from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Github App</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    )
  }
}

export default NavigationBar;
