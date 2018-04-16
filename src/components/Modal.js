import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {toggle_modal_action} from '../redux/actions/ui_actions';


class Modal extends Component {
  constructor(props){
    super(props); 
  }

  componentDidMount(){
    const $ = window.$; // get access to jQuery loaded in browser :D
    $(this.refs.modal).modal('show');
    this.refs.video.play(); 
    $(this.refs.modal).on('hidden.bs.modal', () => {
      console.log('NURTZ'); 
      this.props.toggle_modal_action(); 
    });  
  }

  componentWillUnmount(){

  }


  render() {
    return (
      <div data-show="true" ref="modal" className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <video src={this.props.video} width="100%" controls ref="video"></video>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ toggle_modal_action }, dispatch);

export default connect(null, mapDispatchToProps)(Modal);
