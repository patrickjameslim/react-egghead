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

// App Stylesheet
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <Grid>
          <Row>
            <Col md={12}>
              <SearchBar/>
            </Col>
          </Row>
          <Row>
            <Panel header="tylermcginnis">
              <Col md={3}>
                  <UserAvatarAndLink/>
              </Col>
              <Col md={9}>
                  <UserPersonalInformation/>
              </Col>
            </Panel>
            <Panel header="Repositories">
              <Col md={12}>
                  <UserRepositories/>
              </Col>
            </Panel>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default App;
