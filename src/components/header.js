import React, { Component } from 'react'

import NavigationContainer from '../containers/NavigationContainer';

export default class Header extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <h1 className="text-center w-100">Apple iTunes &amp; React + Redux</h1>
        <NavigationContainer />
      </div>
    )
  }
}
