import React, {Component} from 'react';
import Image from 'react-bootstrap/lib/Image';
import Button from 'react-bootstrap/lib/Button';

import './UserAvatarAndLink.css';

class UserAvatarAndLink extends Component {
  render() {
    return(
      <div>
        <Image className="avatar" src="https://avatars0.githubusercontent.com/u/2933430?v=3&s=460" responsive rounded/>
        <Button bsStyle="info" block><a href="">View Profile</a></Button>
      </div>
    )
  }
}

UserAvatarAndLink.PropTypes = {
  src: React.PropTypes.string
};

export default UserAvatarAndLink;
