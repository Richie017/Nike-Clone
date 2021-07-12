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
        },
        {
          id: "2",
          img_name: "liverpool-1",
          heading: "Liverpool FC 2021/22 Home Jersey",
        },
        {
          id: "3",
          img_name: "nike-usa",
          heading: "The New US women's National Team Kit",
        },
        /* {
          id: "1",
          img_name: "nike-usa",
          heading: "The New Us women's National Team Kit",
        },*/
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
              key={image.id}
              img_name={image.img_name}
              heading={image.heading}
            />
          ))}
        </Pane>
      </Pane>
    );
  }
}

export default Trending;
