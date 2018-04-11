import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { submit_form_action, form_media_type_changed_action } from '../redux/actions/user_actions';

class SearchFormContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      input: ""
    }
  }

  updateInput  = (e) => this.setState({ input: e.target.value });
  updateSelect = (e) => {
    this.props.form_media_type_changed_action(e.target.value);
    if (!this.state.input.length){
      this.refs.input.focus();
    } else {
      this.refs.submit.focus();
    }
  }
  handleSubmit = (e) => {
    e.preventDefault(); 
    this.props.submit_form_action({
      input: this.state.input,
      media: this.props.state.active_media_type
    });
    this.setState({ input: "" });
  }
  getMediaType = () => {
    return this.props.state.media_types.find(item => 
      item.value === this.props.state.active_media_type).display_text; 
  }

  render() {
    return (
      <form className="clearfix" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Search for New {this.getMediaType()}</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search for music..."
            value={this.state.input}
            onInput={this.updateInput}
            ref="input"
          />
        </div>
        <div className="form-group">
          <label>Change Media Type</label>
          <select className="form-control" value={this.props.state.active_media_type} onChange={this.updateSelect}>
            {
              this.props.state.media_types.map(item => {
                return <option value={item.value} key={item.value}>{item.display_text}</option>
              })
            }
          </select>
        </div>
        <button type="submit" className="btn btn-secondary float-right" ref="submit">Search</button>
      </form>
    )
  }
}

function mapStateToProps(state){
  return {state}
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ submit_form_action, form_media_type_changed_action }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFormContainer);