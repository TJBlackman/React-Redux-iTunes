import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {submit_form_action} from '../redux/actions/user_actions';
import ProductTable from '../components/ProductTable';

class ProductListContainer extends Component {
  constructor(props){
    super(props);
  }

  show_pagenated_products = () => {
    const { current_products, products_per_page, current_page } = this.props.state;
    let start = (current_page - 1) * products_per_page; 
    let end = start + products_per_page; 
    return current_products.slice(start, end); 
  }

  render() {
    
    return (
      <div>
        <ProductTable products={this.show_pagenated_products()} mediaType={this.props.state.active_media_type} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return { state }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ submit_form_action }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
