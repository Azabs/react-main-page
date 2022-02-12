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
    carousel: [
      { text: "First", image: { name: "building", src: "./img/building.jpg" } },
      { text: "Second", image: { name: "swan", src: "./img/swan.jpg" } },
      { text: "Third", image: { name: "road", src: "./img/road.jpg" } },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <NavBar links={this.state.navLinks} />

        <div className="container">
          <Carousel id="main-carousel" carousel={this.state.carousel} />
          <div className="row justify-content-center my-3">
            <Heading
              title="First Heading"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur."
              image={this.state.carousel[0].image}
            />
            <Heading
              title="Second Heading"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur."
              image={this.state.carousel[1].image}
            />
            <Heading
              title="Third Heading"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur."
              image={this.state.carousel[2].image}
            />
          </div>
          <Content
            title="This is a content wrapper"
            text="Sit amet consectetur adipiscing elit duis tristique sollicitudin
                  nibh. Vel risus commodo viverra maecenas accumsan lacus. Blandit
                  massa enim nec dui nunc mattis enim ut tellus. At tellus at urna
                  condimentum mattis. In pellentesque massa placerat duis ultricies
                  lacus sed. Nullam ac tortor vitae purus. Urna id volutpat lacus
                  laoreet non curabitur gravida. Elit at imperdiet dui accumsan sit
                  amet nulla. Mattis vulputate enim nulla aliquet porttitor lacus
                  luctus accumsan tortor."
            imgAfter="true"
            image={this.state.carousel[2].image}
          />
          <Content
            title="This wrapper has an image before the text"
            text="Sit amet consectetur adipiscing elit duis tristique sollicitudin
                  nibh. Vel risus commodo viverra maecenas accumsan lacus. Blandit
                  massa enim nec dui nunc mattis enim ut tellus. At tellus at urna
                  condimentum mattis. In pellentesque massa placerat duis ultricies
                  lacus sed. Nullam ac tortor vitae purus. Urna id volutpat lacus
                  laoreet non curabitur gravida. Elit at imperdiet dui accumsan sit
                  amet nulla. Mattis vulputate enim nulla aliquet porttitor lacus
                  luctus accumsan tortor."
            imgAfter="false"
            image={this.state.carousel[1].image}
          />
          <Content
            title="This one has an image after the text"
            text="Sit amet consectetur adipiscing elit duis tristique sollicitudin
                  nibh. Vel risus commodo viverra maecenas accumsan lacus. Blandit
                  massa enim nec dui nunc mattis enim ut tellus. At tellus at urna
                  condimentum mattis. In pellentesque massa placerat duis ultricies
                  lacus sed. Nullam ac tortor vitae purus. Urna id volutpat lacus
                  laoreet non curabitur gravida. Elit at imperdiet dui accumsan sit
                  amet nulla. Mattis vulputate enim nulla aliquet porttitor lacus
                  luctus accumsan tortor."
            imgAfter="true"
            image={this.state.carousel[0].image}
          />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
