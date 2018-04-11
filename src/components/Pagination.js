import React from 'react'

export default function Pagination (props) {
  const {increment, decrement, max, current} = props; 

  const prev_Element = () => {
    const disabled = current == 1; 
    const className = disabled ? 'page-item disabled' : "page-item"; 
    return (
      <li className={className} onClick={e => {e.preventDefault(); decrement()}}>
        <a className="page-link" href="#" disabled={disabled} >&lt;&lt;</a>
      </li>
    ); 
  }
  
  const next_Element = () => {
    const disabled = current === max;     
    const className = disabled ? 'page-item disabled' : "page-item"; 
    const page_val = !disabled ? 1 : 0; 
    return (
      <li className={className} onClick={e => {e.preventDefault(); increment()}}>
        <a className="page-link" href="#" disabled={disabled} >&gt;&gt;</a>
      </li>
    ); 
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end">
        {prev_Element()}
        <li className="d-flex align-items-center pl-1 pr-2"><span>Page: {current} / {max}</span></li>
        {next_Element()}
      </ul>
    </nav>
  )
}
