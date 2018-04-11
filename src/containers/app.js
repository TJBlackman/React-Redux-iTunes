import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SearchView from './SearchView'

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Router>
        <Switch>
          <Route path="/" component={SearchView} />
          <Route path="/product/" render={() => (<h1>DETAILS</h1>)} />
        </Switch>
      </Router>
    )
  }
}