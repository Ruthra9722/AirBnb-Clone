import React from "react";
import "./components-styles/carousel.css";
import Slider from "react-slick";
const Carousel = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
    <div className="container-md carousel-container">
      <h1 className="carousel-heading">New this week</h1>
    </div>
    
    <div className="div-container">
      <div className="divv">
       
        <img className="imgs" src="https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=1200"></img>
        <div className="contain">
        <h5 style={{fontSize:"12px"}}>Collection</h5>
        <h2 style={{fontSize:"25px"}}>Most Popular <span style={{display:"block"}}>around the world</span></h2>
        </div>
        <button className="show">Show all</button>
      </div>
      <div className="divv">
       
        <img className="imgs"  src="https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=1200"></img>
        <div className="contain">
        <h5 style={{fontSize:"12px"}}>Collection</h5>
        <h2 style={{fontSize:"25px"}}>Great for team  <span style={{display:"block"}}>building</span></h2>
        </div>
        <button className="show">Show all</button>
      </div>
      <div className="divv">
       
       <img className="imgs"   src="https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=1200"></img>
       <div className="contain">
       <h5 style={{fontSize:"12px"}}>Collection</h5>
       <h2 style={{fontSize:"25px"}}>Fun for the family</h2>
       </div>
       <button className="show">Show all</button>
     </div>
    </div>
  
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      
    </>
  );
};

export default Carousel;
