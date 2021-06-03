import React from "react";

import carouselImg1 from "../assets/cover.png";
import "../css/Carousel.css";

const Carousel = () => {
  return (
    <div className="cover">
      <div
        className="coverText"
        data-aos="fade-left"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
        data-aos-delay="1500"
      >
        <h1> Where Passion Meets Perfection</h1>
        <div className="coverDescription">
          Explore the art of design and get your product impact the way you want
        </div>
        <button>Get Quote</button>
      </div>
      <img className="coverImg" alt="cover " src={carouselImg1} />
    </div>
  );
};

export default Carousel;
