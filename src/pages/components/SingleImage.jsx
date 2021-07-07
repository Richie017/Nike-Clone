import React, { Component } from "react";
import { Pane } from "evergreen-ui";
import "../assets/css/ImageButton.css";
import ImageButton from "./ImageButton";

class SingleImage extends Component {
  constructor() {
    super();
    this.state = {
      images: [
        {
          id: "1",
          img_name: "top-img",
          heading: "Air Max Summer",
          sub_heading: "The Best of Air Max for your best summer ever",
        },
      ],
    };
  }

  render() {
    return (
      <Pane className="container">
        <Pane className="img-container">
          {this.state.images.map((image) => (
            <ImageButton
              key={image.id.toString()}
              id={image.id}
              img_name={image.img_name}
              heading={image.heading}
              sub_heading={image.sub_heading}
            />
          ))}
        </Pane>
      </Pane>
    );
  }
}

export default SingleImage;
