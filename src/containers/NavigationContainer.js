import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { nav_was_clicked } from '../redux/actions/user_actions';

class Navigation_Menu extends Component {

  render(){
    let {media_types} = this.props; 

    return (
      <div className="btn-group d-flex justify-content-center btn-group-lg w-100 mb-3" >
        {
          media_types.map(item => {
            return (
              <button 
                type = "button" 
                key = {item.value}
                className = {`btn btn-secondary ${item.value === this.props.active_media_type ? "active":""}`}
                onClick = {() => this.props.nav_was_clicked(item.value)}
              >
                {item.display_text}
              </button>            
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps({ active_media_type, media_types }){
  return { active_media_type, media_types }; 
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ nav_was_clicked }, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Navigation_Menu);