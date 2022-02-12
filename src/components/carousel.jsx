import React, { Component } from "react";

class Carousel extends Component {
  renderCarousel = () => {
    let active = true;
    let imgArray = this.props.carousel.map((c) => (
      <div
        className={
          "carousel-item " + (active ? ((active = false), "active") : "")
        }
        key={c.image.name}
      >
        <img src={c.image.src} alt={c.image.name} className="carousel-bg" />
        <p className="text-center align-self-center">{c.text}</p>
      </div>
    ));

    return imgArray;
  };

  render() {
    /*Carousels needs an id for the controls*/
    return (
      <div
        id={this.props.id}
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">{this.renderCarousel()}</div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={"#" + this.props.id}
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
          data-bs-target={"#" + this.props.id}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

export default Carousel;
