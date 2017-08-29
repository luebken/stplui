import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'


class Package extends Component {
  render() {
    var componentRequest = /package\/(.*)\/(.*)/.exec(window.location.pathname)
    var ecosystem
    var name
    if (componentRequest) {
      ecosystem = componentRequest[1]
      name = componentRequest[2]
    }
    return (
      <div>
        <h2>Package</h2>

        <span>I'm looking for information for package: </span>  <InputSearch name={name} />

        <p>Ecosystem: {ecosystem}</p>
        <p>Package: {name}</p>

        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
      </div>
    );
  }
}

class InputSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.name };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(event)
  }

  handleSubmit(event) {
    event.preventDefault();
    window.location = '/package/npm/' + this.state.value //TODO hackisch
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ 'display': 'inline-block'}}>
        <Input value={this.state.value} onChange={this.handleChange} onSubmit={this.handleSubmit} placeholder='NPM package name' />
        <Input type="submit" value="Search" />
      </form>
    )
  }
}

export default Package;
