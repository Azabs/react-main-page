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
      {
        content: {
          title: "First",
          text: "Autem corrupti et delectus doloribus voluptatem et qui. Ut amet quos et voluptatem quidem doloremque itaque. Asperiores assumenda asperiores iusto. Dicta quis eos dolorem. Dolor assumenda dolorem debitis ut quae.",
        },
        image: { name: "building", src: "./img/building.jpg" },
      },
      {
        content: {
          title: "Second",
          text: "Curabitur vitae blandit enim. Curabitur dictum a mauris et porttitor. Nullam pulvinar eros vitae blandit tempus. Vestibulum risus massa, pellentesque non dolor id, accumsan elementum urna. Pellentesque in euismod arcu.",
        },
        image: { name: "swan", src: "./img/swan.jpg" },
      },
      {
        content: {
          title: "Third",
          text: "Donec ac feugiat orci. Morbi elementum eget ex ut vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nec dignissim metus. Suspendisse accumsan risus sem.",
        },
        image: { name: "clouds", src: "./img/clouds.jpg" },
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <NavBar links={this.state.navLinks} />
        <Carousel id="main-carousel" carousel={this.state.carousel} />
        <div className="container">
          <div className="row justify-content-center my-3">
            <Heading
              title="First Heading"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur."
              image={{ name: "bird", src: "./img/bird.jpg" }}
            />
            <Heading
              title="Second Heading"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur."
              image={{ name: "city", src: "./img/city.jpg" }}
            />
            <Heading
              title="Third Heading"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur."
              image={{ name: "woman", src: "./img/woman.jpg" }}
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
            image={{ name: "chair", src: "./img/chair.jpg" }}
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
            image={{ name: "cat", src: "./img/cat.jpg" }}
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
            image={{ name: "flower", src: "./img/flower.jpg" }}
          />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
