import React, { Component } from "react";
import { Pane, Button, Heading } from "evergreen-ui";

import "../assets/css/WideImage.css";
import picture from "../assets/images/nike-just-do-it.jpeg";

class WideImage extends Component {
  render() {
    return (
      <Pane className="wide-image-container">
        <img src={picture} alt="Father's day"></img>
        <Pane className="image-content">
          <Heading className="txt">GO ALL OUT FOR DAD</Heading>
          <Button className="btn">Shop</Button>
        </Pane>
      </Pane>
    );
  }
}

export default WideImage;
