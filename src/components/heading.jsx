import React, { Component } from "react";

const Heading = (props) => {
  return (
    <div className="col-md-6 col-lg-4 text-light text-center bg-dark p-3 my-2">
      <img
        src={props.image.src}
        alt={props.image.name}
        className="heading-img"
      />
      <h3 className="my-2">{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default Heading;
