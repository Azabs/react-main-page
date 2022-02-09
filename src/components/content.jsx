import React, { Component } from "react";

class Content extends Component {
  state = {};

  renderContent = () => {
    const text = (
      <div className="col-md-7 px-4 m-auto">
        <h2 className="my-3">{this.props.title}</h2>
        <p className="mb-3">{this.props.text}</p>
      </div>
    );
    const img = (
      <div className="col-md-5">
        <img
          src={this.props.image.src}
          alt={this.props.image.name}
          className="img-fluid"
        />
      </div>
    );

    const content =
      this.props.imgAfter === "true" ? (
        <React.Fragment>
          {text}
          {img}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {img}
          {text}
        </React.Fragment>
      );

    return content;
  };

  render() {
    return (
      <div className="row content text-light text-center bg-dark mb-3">
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
