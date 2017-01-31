import React, {Component} from 'react';

import Repository from '../Repository/Repository';

import './UserRepositories.css';


class UserRepositories extends Component {
  render() {
    // this.props.repositories.map((repository) => {
    //   console.log(repository.name);
    // });
    console.log(this.props.repositories);
    return(
      <Repository/>
    )
  }
}

UserRepositories.PropTypes = {
  userRepositories: React.PropTypes.Array
};

export default UserRepositories;
