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
    let sub_heading = this.props.sub_heading;
    const sub_heading_func = () => {
      if (sub_heading !== "") {
        return (
          <Pane>
            <Heading className="heading-txt">{this.props.heading}</Heading>
            <Heading className="subheading-txt">
              {this.props.sub_heading}
            </Heading>
            <Pane className="btncls">
              <Button className="btn"> Shop </Button>
            </Pane>
          </Pane>
        );
      } else {
        return (
          <Pane>
            <Heading className="txt">{this.props.heading}</Heading>
            <Pane className="btncls">
              <Button className="btn"> Shop </Button>
            </Pane>
          </Pane>
        );
      }
    };

    let btn_visibity = this.props.caption;
    console.log("btn" + btn_visibity);
    const btn_func = () => {
      if (btn_visibity === "out-place") {
        return <Heading className="out-caption">{this.props.heading}</Heading>;
      } else {
        return sub_heading_func();
      }
    };

    const cap_position =
      this.props.caption === "out-place" ? "relative" : "absolute";
    const cap_class =
      this.props.caption === "out-place" ? "figCaption1" : "figCaption";

    console.log(cap_position);

    return (
      <Pane className="img-component-container">
        <img
          src={
            require("../assets/images/" + this.props.img_name + ".png")?.default
          }
          alt=""
        />

        <Pane className={cap_class} position={cap_position}>
          {btn_func()}
        </Pane>
      </Pane>
    );
  }
}

export default ImageButton;
