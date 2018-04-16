import React from 'react'
import { connect } from 'react-redux';
import SearchView from './SearchView'

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return <SearchView />
  }
}


