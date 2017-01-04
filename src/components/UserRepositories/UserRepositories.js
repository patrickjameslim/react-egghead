import React, {Component} from 'react';

import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Badge from 'react-bootstrap/lib/Badge';

import './UserRepositories.css';

class UserRepositories extends Component {
  render() {
    return(
      <div>
        <h3>
          <div className="repository">
            <Row>
              <Col md={9}>
                <a href="#">re-base</a>
              </Col>
              <Col md={3}>
                <Badge bsStyle="warning">1.1k Stars</Badge>
                <Badge bsStyle="info">91 Watchers</Badge>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <p>A Relay inspired library for building React.js + Firebase applications.</p>
              </Col>
            </Row>
          </div>
          <hr/>
          <div className="repository">
            <Row>
              <Col md={9}>
                <a href="#">react-router-firebase-auth</a>
              </Col>
              <Col md={3}>
                <Badge bsStyle="warning">1.1k Stars</Badge>
                <Badge bsStyle="info">91 Watchers</Badge>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <p>Example of how to have protected routes with Firebase and React Router.</p>
              </Col>
            </Row>
          </div>
          <hr/>
        </h3>
      </div>
    )
  }
}

UserRepositories.PropTypes = {
  repoName: React.PropTypes.string,
  description: React.PropTypes.string,
  stars: React.PropTypes.number,
  watchers: React.PropTypes.number
};

export default UserRepositories;
