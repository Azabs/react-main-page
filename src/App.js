import React, { Component } from "react";
import NavBar from "./components/navbar";
import Carousel from "./components/carousel";
import Footer from "./components/footer";

class App extends Component {
  state = {
    navLinks: [
      { name: "Home", url: "#", class: "active" },
      { name: "Link", url: "#", class: "" },
      { name: "Disabled", url: "#", class: "disabled" },
    ],
    carouselImgs: [
      { name: "building", src: "./img/building.jpg" },
      { name: "swan", src: "./img/swan.jpg" },
      { name: "road", src: "./img/road.jpg" },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <NavBar links={this.state.navLinks} />
        <Carousel id="main-carousel" images={this.state.carouselImgs} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
