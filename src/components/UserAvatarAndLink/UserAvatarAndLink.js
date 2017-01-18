import React, {Component} from 'react';
import Image from 'react-bootstrap/lib/Image';
import Button from 'react-bootstrap/lib/Button';

import './UserAvatarAndLink.css';

class UserAvatarAndLink extends Component {
  render() {
    return(
      <div>
        <Image className="avatar" src={this.props.avatarUrl} responsive rounded/>
        <a href={this.props.profileUrl} target="_blank"><Button bsStyle="info" block>View Profile</Button></a>
      </div>
    )
  }
}

UserAvatarAndLink.PropTypes = {
  avatarUrl: React.PropTypes.string,
  profileUrl: React.PropTypes.string
};

export default UserAvatarAndLink;
