import React from "react";
import img1 from '../Image/Slider1.png';
import img2 from '../Image/Slider2.png';
import img3 from '../Image/Slider3.png';
import Carousel from 'react-bootstrap/Carousel'
import "./Carousels.css"
const Carousels = ()=>{
    return(
        <>
        <div className="m-auto w-100 h-25" >
            <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide" 
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide" 
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</div>
        </>
    )
}
export default Carousels;