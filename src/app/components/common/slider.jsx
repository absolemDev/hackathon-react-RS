import { Carousel } from "bootstrap";
import React, { useEffect, useRef } from "react";
import PropTtypes from "prop-types";

const Slider = ({ sliders }) => {
  const carouselElement = useRef(null);
  useEffect(() => {
    const carousel = new Carousel(carouselElement.current);
    return () => {
      carousel.dispose();
    };
  }, []);
  return (
    <div className="carousel-wrapper shadow-lg rounded">
      <div id="carousel" className="carousel slide" ref={carouselElement}>
        <div className="carousel-indicators">
          {sliders.map((item, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carousel"
              data-bs-slide-to={String(index)}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner px-5">
          {sliders.map((item, index) => (
            <div
              key={index}
              className={`carousel-item${index === 0 ? " active" : ""}`}
            >
              <p className="m-5 mb-0">{item.content}</p>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="position-relative">{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel"
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
          data-bs-target="#carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

Slider.propTypes = {
  sliders: PropTtypes.arrayOf(PropTtypes.object)
};

export default Slider;
