import React from 'react'

export default function Carousel (props) {

  const addSlides = (array) => {
    return array.map((image, index) => {
      return (
        <div className={`carousel-item${index < 1 ? " active" : ""}`} key={image}>
          <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
        </div>
      );
    });
  }

  return (
    <div 
      id={props.carouselID || 'Carousel_'+Math.random().toFixed(3) * 1E3} 
      className="carousel slide mb-3" 
      data-ride="carousel"
    >
      <div className="carousel-inner">
        { 
          addSlides(props.images) 
        }
      </div>
    </div>
  )
}
