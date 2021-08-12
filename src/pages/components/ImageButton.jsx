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
          sub_heading: "",
          caption: "",
        },
      ],
    };
  }

  render() {
    let subHeading = this.props.sub_heading;
    const sub_heading_func = () => {
      if (subHeading !== "") {
        return (
          <Pane>
            <Heading className="heading-txt">{this.props.heading}</Heading>
            <Heading className="subheading-txt">
              {this.props.sub_heading}
            </Heading>
            <Pane className="btncls">
              <Button className="btn-white"> Shop </Button>
            </Pane>
          </Pane>
        );
      } else {
        return (
          <Pane>
            <Heading className="txt">{this.props.heading}</Heading>
            <Pane className="btncls">
              <Button className="btn-white"> Shop </Button>
            </Pane>
          </Pane>
        );
      }
    };

    let btnVisibity = this.props.caption;

    const btn_func = () => {
      if (btnVisibity === "out-place") {
        return <Heading className="out-caption">{this.props.heading}</Heading>;
      } else {
        return sub_heading_func();
      }
    };

    const capPosition =
      this.props.caption === "out-place" ? "relative" : "absolute";
    const capClass =
      this.props.caption === "out-place"
        ? "fig-caption-outside"
        : "fig-caption";

    return (
      <Pane className="img-component-container">
        <img
          src={
            require("../assets/images/home/" + this.props.img_name + ".png")?.default
          }
          alt=""
        />

        <Pane className={capClass} position={capPosition}>
          {btn_func()}
        </Pane>
      </Pane>
    );
  }
}

export default ImageButton;
