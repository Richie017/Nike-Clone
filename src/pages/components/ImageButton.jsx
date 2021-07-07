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
        },
      ],
    };
  }

  render() {
    let sub_heading = this.props.sub_heading;
    const sub_heading_func = () => {
      if (sub_heading !== "") {
        return (
          <Pane className="img-caption">
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
          <Pane className="img-caption">
            <Heading className="txt">{this.props.heading}</Heading>
            <Pane className="btncls">
              <Button className="btn"> Shop </Button>
            </Pane>
          </Pane>
        );
      }
    };

    /*let btn_visibity = this.props.caption;
    console.log(btn_visibity);
    const btn_func = () => {
      if (btn_visibity !== "") {
        return (
          <Pane>
            {sub_heading_func()}
            <Button className="btn"> Shop </Button>
          </Pane>
        );
      } else {
        return <Heading className="out-caption">{this.props.heading}</Heading>;
      }
    };*/

    const position =
      this.props.caption === "out-place" ? "relative" : "absoulte";

    console.log(position);

    return (
      <Pane className="img-component-container">
        <img
          src={
            require("../assets/images/" + this.props.img_name + ".png")?.default
          }
          alt=""
        />

        <Pane className="figCaption" position="absolute"></Pane>
        <Pane>{sub_heading_func()}</Pane>
      </Pane>
    );
  }
}

export default ImageButton;
