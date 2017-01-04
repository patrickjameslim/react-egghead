import React, {Component} from 'react';

import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Label from 'react-bootstrap/lib/Label';

import './UserPersonalInformation.css';

class UserPersonalInformation extends Component {
  render() {
    return(
      <div>
        <div className="labelContainers">
          <Label bsStyle="primary">103 Repositories</Label>
          <Label bsStyle="warning">173 Stars</Label>
          <Label bsStyle="info">1.2k Followers</Label>
        </div>

        <ListGroup>
          <ListGroupItem><strong>Name: </strong> <span>Tyler McGinnis</span></ListGroupItem>
          <ListGroupItem><strong>Email: </strong> <span>tylermcginnis@gmail.com</span></ListGroupItem>
          <ListGroupItem><strong>Location: </strong> <span>Los Angeles, CA</span></ListGroupItem>
          <ListGroupItem><strong>Member Since: </strong> <span>01/04/2017</span> </ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}

UserPersonalInformation.PropTypes = {
  repositories: React.PropTypes.number,
  stars: React.PropTypes.number,
  followers: React.PropTypes.number,
  name: React.PropTypes.string,
  email: React.PropTypes.string,
  location: React.PropTypes.string,
  date: React.PropTypes.instanceOf(Date)
};

export default UserPersonalInformation;
