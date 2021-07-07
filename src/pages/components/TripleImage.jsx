import React, { Component } from "react";
import { Pane, Heading } from "evergreen-ui";
import "../assets/css/ImageButton.css";
import ImageButton from "./ImageButton";

class TripleImage extends Component {
  constructor() {
    super();
    this.state = {
      images: [
        {
          id: "1",
          img_name: "men-short",
          heading: "Men's Short",
          sub_heading: "",
          caption: "out-place",
        },
        {
          id: "2",
          img_name: "women-short",
          heading: "Womens's Short",
          sub_heading: "",
          caption: "out-place",
        },
        {
          id: "3",
          img_name: "kids-short",
          heading: "Kid's Short",
          sub_heading: "",
          caption: "out-place",
        },
      ],
    };
  }

  render() {
    return (
      <Pane className="container">
        <Pane>
          <Heading className="header-img">More To Explore</Heading>
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

export default TripleImage;
