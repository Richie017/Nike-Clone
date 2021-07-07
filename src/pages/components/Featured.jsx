import React, { Component } from "react";
import { Pane, Heading } from "evergreen-ui";
import "../assets/css/ImageButton.css";
import ImageButton from "./ImageButton";

class Featured extends Component {
  constructor() {
    super();
    this.state = {
      images: [
        {
          id: "1",
          img_name: "featured-1",
          heading: "Men's Short",
          sub_heading: "",
        },
        {
          id: "2",
          img_name: "featured-2",
          heading: "Womens's Short",
          sub_heading: "",
        },
      ],
    };
  }

  render() {
    return (
      <Pane className="container">
        <Pane>
          <Heading className="header-img">Featured Styles</Heading>
        </Pane>
        <Pane className="img-container">
          {this.state.images.map((image) => (
            <ImageButton
              key={image.id.toString()}
              id={image.id}
              img_name={image.img_name}
              heading={image.heading}
              sub_heading={image.sub_heading}
              caption={image.caption}
            />
          ))}
        </Pane>
      </Pane>
    );
  }
}

export default Featured;
