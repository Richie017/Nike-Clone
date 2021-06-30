import React, { Component } from "react";
import { Pane, Button, Heading } from "evergreen-ui";
import "../assets/css/ImageButton.css";

class ImageButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        {
          img_name: "",
          heading: "",
        },
      ],
    };
  }

  render() {
    console.log(this.props.name);
    return (
      <Pane className="img-component-container">
        <img
          src={
            require("../assets/img/" + this.props.img_name + ".png")?.default
          }
          alt=""
        />

        <Pane className="btn-txt">
          <Heading className="txt">{this.props.heading}</Heading>
          <Button className="btn"> Shop </Button>
        </Pane>
      </Pane>
    );
  }
}

export default ImageButton;
