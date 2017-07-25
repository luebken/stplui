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


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu>
            <Menu.Item exact name='home' as={NavLink} to='/'>
              Home
            </Menu.Item>
            <Menu.Item name='package' as={NavLink} to='/about'>
              Package
            </Menu.Item>
            <Menu.Item name='home' as={NavLink} to='/topics'>
              Apps
            </Menu.Item>

          </Menu>

          <div className="App-content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
