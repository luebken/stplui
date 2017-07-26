import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import './App.css';
import Home from './Home';
import About from './About';
import Topics from './Topics';
import Login from './LoginLayout';
import * as cognito from './cognito-utils';


class App extends Component {

  handleLogOut() {
    cognito.SignOut()
    //TODO
    window.location.reload();

  }

  render() {
    var app = <Router>
      <div className="App">
        <Menu>
          <Menu.Item exact name='home' as={NavLink} to='/'>
            stpl.io
        </Menu.Item>
          <Menu.Item name='package' as={NavLink} to='/about'>
            Package
        </Menu.Item>
          <Menu.Item name='home' as={NavLink} to='/topics'>
            Apps
        </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item name='logout' onClick={this.handleLogOut} />
          </Menu.Menu>
        </Menu>

        <div className="App-content">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </div>
    </Router>

    return (
      <div>
        {
          (cognito.IsSignedIn()) ? app : <Login />
        }
      </div>
    );
  }
}

export default App;
