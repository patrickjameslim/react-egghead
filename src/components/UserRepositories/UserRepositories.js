import React, {Component} from 'react';

import Repository from '../Repository/Repository';

import './UserRepositories.css';


class UserRepositories extends Component {
  render() {
    // this.props.repositories.map((repository) => {
    //   console.log(repository.name);
    // });

    return(
      <div>
        { this.props.repositories.map((repo) => {
          return <Repository
            key={repo.id}
            name={repo.name}
            stars={repo.stargazers_count}
            watchers={repo.watchers}
          />
        })}

      </div>
    )
  }
}

UserRepositories.PropTypes = {
  userRepositories: React.PropTypes.Array
};

export default UserRepositories;
