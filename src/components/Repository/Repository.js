import React, { Component } from 'react';

import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Badge from 'react-bootstrap/lib/Badge';

import './Repository.css';

class Repository extends Component {
  render() {
    return(
      <div>
        <div className="repository">
          <Row>
            <Col md={9}>
              <h3>{this.props.name}</h3>
            </Col>
            <Col md={3}>
              <Badge bsStyle="warning">{this.props.stars}</Badge>
              <Badge bsStyle="info">{this.props.watchers}</Badge>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <p>{this.props.desc}</p>
            </Col>
          </Row>
        </div>
        <hr/>
      </div>
    )
  }
}

export default Repository;
