import React, { Component } from 'react';

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
        <p>some about stuff</p>
        <p>Ecosystem: {ecosystem}</p>
        <p>Package: {name}</p>



        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
      </div>
    );
  }
}

export default Package;
