import React, { Component } from "react";
import NavBar from "./components/navbar";
import Carousel from "./components/carousel";
import Heading from "./components/heading";
import Content from "./components/content";
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
    /*<Carousel id="main-carousel" images={this.state.carouselImgs} />*/
    return (
      <React.Fragment>
        <NavBar links={this.state.navLinks} />

        <div className="container">
          <div className="row justify-content-center my-3">
            <Heading image={this.state.carouselImgs[0]} />
            <Heading image={this.state.carouselImgs[1]} />
            <Heading image={this.state.carouselImgs[2]} />
          </div>
          <Content
            title="Title"
            text="Sit amet consectetur adipiscing elit duis tristique sollicitudin
                  nibh. Vel risus commodo viverra maecenas accumsan lacus. Blandit
                  massa enim nec dui nunc mattis enim ut tellus. At tellus at urna
                  condimentum mattis. In pellentesque massa placerat duis ultricies
                  lacus sed. Nullam ac tortor vitae purus. Urna id volutpat lacus
                  laoreet non curabitur gravida. Elit at imperdiet dui accumsan sit
                  amet nulla. Mattis vulputate enim nulla aliquet porttitor lacus
                  luctus accumsan tortor."
            imgAfter="true"
            image={this.state.carouselImgs[2]}
          />
          <Content
            title="Title"
            text="Sit amet consectetur adipiscing elit duis tristique sollicitudin
                  nibh. Vel risus commodo viverra maecenas accumsan lacus. Blandit
                  massa enim nec dui nunc mattis enim ut tellus. At tellus at urna
                  condimentum mattis. In pellentesque massa placerat duis ultricies
                  lacus sed. Nullam ac tortor vitae purus. Urna id volutpat lacus
                  laoreet non curabitur gravida. Elit at imperdiet dui accumsan sit
                  amet nulla. Mattis vulputate enim nulla aliquet porttitor lacus
                  luctus accumsan tortor."
            imgAfter="false"
            image={this.state.carouselImgs[1]}
          />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
