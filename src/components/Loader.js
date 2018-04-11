import React from 'react'
import { ScaleLoader } from 'react-spinners';


export default function Loader (props){
  return (
    <div className="d-flex w-100 justify-content-center align-item-center mt-3">
      <ScaleLoader 
        color  = { props.color  || "#21b4e2" } 
        height = { props.height || 35 }
        width  = { props.width  || 4 }
        radius = { props.radius || 2 }
        margin = { props.margin || '2px'}
      />
    </div>
  )
}
