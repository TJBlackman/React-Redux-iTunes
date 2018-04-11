import React from 'react'

export default function SearchHistory({history, handleClick}) {
  if(!history){ return ""; }

  return (
    <div className="mt-5">
      <p className="font-weight-bold text-center">Previous Searches</p>
      <ul className="list-group">
        {
          history.map(({id, term}) => {
            return (
              <li className="list-group-item cursor-hover-pointer" key={id} onClick={() => handleClick(id)}>
                {term}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
