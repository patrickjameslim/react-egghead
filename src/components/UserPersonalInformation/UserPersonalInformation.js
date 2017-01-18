import React, {Component} from 'react';

import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Label from 'react-bootstrap/lib/Label';

import Moment from 'react-moment';

import './UserPersonalInformation.css';

class UserPersonalInformation extends Component {
  render() {
    let parseDate = this.props.memberSince;
    return(
      <div>
        <div className="labelContainers">
          <Label bsStyle="primary">{this.props.repositories} Repositories</Label>
          <Label bsStyle="info">{this.props.followers} Followers</Label>
          <Label bsStyle="danger">{this.props.following} following</Label>
        </div>

        <ListGroup>
          <ListGroupItem><strong>Name: </strong>
            <span>{this.props.name}</span>
          </ListGroupItem>
          <ListGroupItem><strong>Email: </strong>
            <span>{this.props.email ? this.props.email : 'N/A'}</span>
          </ListGroupItem>
          <ListGroupItem><strong>Location: </strong>
           <span>{this.props.location}</span>
          </ListGroupItem>
          <ListGroupItem><strong>Member Since: </strong>
            <span>
              <Moment format="MM/DD/YYYY">{parseDate}</Moment>
            </span>
          </ListGroupItem>
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
  memberSince: React.PropTypes.instanceOf(Date)
};

export default UserPersonalInformation;
