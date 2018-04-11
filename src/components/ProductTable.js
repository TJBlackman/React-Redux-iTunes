import React from 'react'
import ProductListItem from './ProductListItem';

export default function ProductTable(props) {
  return (
    <div>
      {/* <Pagination data={this.pagination_props()} /> */}
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Track Name</th>
            <th scope="col">Artist</th>
            <th scope="col">Album</th>
            <th scope="col">Preview</th>
          </tr>
        </thead>
        <tbody>
          { 
            props.products.map(item => {
              return <ProductListItem data={item} key={item.trackId}/>
            }) 
          }
        </tbody>
      </table>
    </div>
  )
}
