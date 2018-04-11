import React from 'react'

export default (props) => {

  return (
    <button 
      type="button" 
      className={`btn btn-secondary ${props.active ? " active" : ""}`}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  )
}
