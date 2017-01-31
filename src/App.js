import React, { Component } from 'react';

// Custom Components
import NavigationBar from './components/NavigationBar/NavigationBar';
import SearchBar from './components/SearchBar/SearchBar';
import UserAvatarAndLink from './components/UserAvatarAndLink/UserAvatarAndLink';
import UserPersonalInformation from './components/UserPersonalInformation/UserPersonalInformation';
import UserRepositories from './components/UserRepositories/UserRepositories';

// React Bootstrap Components
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';

// Fetch Requests
import FetchRequests from './FetchRequests.js';

// App Stylesheet
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fetchRequests: new FetchRequests(),
      githubUser: {},
      githubUserRepositories: []
    }
  }
  componentDidMount() {
    /*FetchRequests.getGithubUser('https://api.github.com/users/tylermcginnis')
    .then((data) => {
      this.setState({avatar: data.avatar_url});
    });*/
    this.state.fetchRequests.getGithubUser('tylermcginnis')
    .then((json) => {
      this.setState({
        githubUser: {
          avatarUrl: json.avatar_url,
          username: json.login,
          profileUrl: 'http://github.com/' + json.login,
          name: json.name,
          email: json.email,
          location: json.location,
          memberSince: json.created_at,
          followers: json.followers,
          following: json.following,
          repositories: json.public_repos
        }
      });
    });
    this.state.fetchRequests.getGithubUserRepositories('tylermcginnis')
    .then((json) => {
      this.setState({
        githubUserRepositories: json
      });
    });
  }

  render() {
    return (
      <div>
        <NavigationBar/>
        <Grid>
          <Row>
              <SearchBar onSearch={this.searchGithubUser.avatarUrl}/>
          </Row>
          <Row>
            <Panel header={this.state.githubUser.username}>
              <Col sm={3}>
                  <UserAvatarAndLink
                    avatarUrl={this.state.githubUser.avatarUrl}
                    profileUrl={this.state.githubUser.profileUrl}
                  />
              </Col>
              <Col sm={9}>
                  <UserPersonalInformation
                    name={this.state.githubUser.name}
                    email={this.state.githubUser.email}
                    location={this.state.githubUser.location}
                    memberSince={this.state.githubUser.memberSince}
                    followers={this.state.githubUser.followers}
                    following={this.state.githubUser.following}
                    repositories={this.state.githubUser.repositories}
                  />
              </Col>
            </Panel>
            <Panel header="Repositories">
              <Col sm={12}>
                  <UserRepositories repositories={this.state.githubUserRepositories}/>
              </Col>
            </Panel>
          </Row>
        </Grid>
      </div>
    )
  }

  searchGithubUser(username) {
    this.state.fetchRequests.getGithubUser(username)
    .then((json) => {
      console.log('searchGithubUser(): ' + json);
      this.setState({
        githubUser: {
          avatarUrl: json.avatar_url,
          username: json.login,
          profileUrl: 'http://github.com/' + json.login,
          name: json.name,
          email: json.email,
          location: json.location,
          memberSince: json.created_at,
          followers: json.followers,
          following: json.following,
          repositories: json.public_repos
        }
      });
    });
    this.state.fetchRequests.getGithubUserRepositories(username)
    .then((json) => {
      this.setState({
        githubUser: {
          userRepositories: json
        }
      })
      console.log('searchGithubUser(): ' + this.state.githubUser.userRepositories);
    });
  }
}

export default App;
