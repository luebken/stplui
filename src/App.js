import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './Home';
import About from './About';
import Topics from './Topics';



class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div className="App">
            
            <ul className="App-header">
              <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
              <li><NavLink to="/about"activeClassName="active">About</NavLink></li>
              <li><NavLink to="/topics" activeClassName="active">Topics</NavLink></li>
            </ul>

            <div className="App-content">
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/topics" component={Topics}/>
            </div>

          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
