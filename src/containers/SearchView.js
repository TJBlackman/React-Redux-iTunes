import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/header';
import CarouselContainer from '../containers/CarouselContainer';
import ProductListContainer from '../containers/ProductListContainer';
import SearchFormContainer from '../containers/FormContainer';
import Pagination from '../components/Pagination';
import SearchHistory from '../components/SearchHistory';
import Loader from '../components/Loader';

import {increment_page_number_action, decrement_page_number_action, history_item_cliked_action} from '../redux/actions/user_actions';




class SearchView extends React.Component {
  constructor(props){
    super(props);
  }

  maxPages = () => {
    const { current_products, products_per_page } = this.props.state;
    return Math.ceil(current_products.length / products_per_page)
  }

  showListResults = () => {
    const { current_products, current_page } = this.props.state;
    return (
      <div>
        <Pagination increment={ this.props.increment_page_number_action } decrement={ this.props.decrement_page_number_action } max={this.maxPages()} current={current_page}/>
        <ProductListContainer products={current_products}/>
        <Pagination increment={ this.props.increment_page_number_action } decrement={ this.props.decrement_page_number_action } max={this.maxPages()} current={current_page}/>
      </div>
    )
  }

  getCurrentHistory = () => {
    const { active_media_type, history } = this.props.state;
    return history.filter(item => item.media === active_media_type).slice(0, 5); 
  }

  ifShowSpinner = () => this.props.state.searching; 

  render(){
    const { current_products } = this.props.state;
    return (
      <div>
        <Header />
        <CarouselContainer />
        <div className="row">
          <div className="col-lg-9 col-md-8">
            {
              this.ifShowSpinner() ? 
                <Loader height={75} width={10} margin={`0 5px;`} /> :
              current_products.length > 0 ?
                this.showListResults() : 
                <h3 className="text-center">Please search for a song, movie, tv show, or podcast.</h3>
            }
          </div>
          <div className="col-lg-3 col-md-4">
            <SearchFormContainer state={this.props.state} />
            <SearchHistory history={this.getCurrentHistory()} handleClick={this.props.history_item_cliked_action} />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {state}
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ increment_page_number_action, decrement_page_number_action, history_item_cliked_action }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchView)