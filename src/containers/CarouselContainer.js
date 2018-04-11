import React, { Component } from 'react'
import Carousel from '../components/Carousel';
import { connect } from 'react-redux';

class CarouselContainer extends Component {

  get_images = () => {
    switch (this.props.active_media_type){
      case 'music': 
        return ["/images/music-3.jpeg","/images/music-1.jpeg","/images/music-2.jpeg"];
      case 'movie': 
        return ["/images/movies-1.jpeg","/images/movies-2.jpeg","/images/movies-3.jpg"];
      case 'tvShow': 
        return ["/images/tv-1.jpg","/images/tv-2.jpeg","/images/tv-3.jpeg"];
      case 'apps': 
        return ["/images/apps-2.jpeg","/images/apps-1.jpeg","/images/apps-3.jpeg"];
      case 'podcast': // fallthrough
      default: return ["/images/books-1.jpeg","/images/books-2.jpeg","/images/books-3.jpeg"];
    }
  }
  
  render(){
    return (
      <Carousel images={this.get_images()} />
    )
  }
}

function mapStateToProps({ active_media_type }){
  return { active_media_type };
}

export default connect(mapStateToProps)(CarouselContainer);
