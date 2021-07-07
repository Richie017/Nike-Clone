import React, { Component } from "react";
import { Pane, Heading } from "evergreen-ui";
import "../assets/css/ImageButton.css";
import ImageButton from "./ImageButton";

class Trending extends Component {
  constructor() {
    super();
    this.state = {
      images: [
        {
          id: "1",
          img_name: "shoe-1",
          heading: "Nike Football Impulse Pack",
          sub_heading: "",
        },
        {
          id: "2",
          img_name: "liverpool-1",
          heading: "Liverpool FC 2021/22 Home Jersey",
          sub_heading: "",
        },
      ],
    };
  }

  render() {
    return (
      <Pane className="container">
        <Pane>
          <Heading className="header-img">Trending</Heading>
        </Pane>
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

export default Trending;
