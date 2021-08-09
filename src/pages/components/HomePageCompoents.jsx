import React, { Component } from "react";
import { Pane, Heading } from "evergreen-ui";
import ImageButton from "./ImageButton";

class HomePageComponents extends Component {
  constructor() {
    super();
    this.state = {
      landing_images: [
        {
          id: "1",
          img_name: "top-img",
          heading: "Air Max Summer",
          sub_heading: "The Best of Air Max for your best summer ever",
        },
      ],
      featured_images: [
        {
          id: "1",
          img_name: "featured-1",
          heading: "Men's Short",
          sub_heading: "",
        },
        {
          id: "2",
          img_name: "featured-2",
          heading: "Women's Short",
          sub_heading: "",
        },
      ],
      trending_images: [
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
      explored_images: [
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
      <Pane>
        <Pane className="container">
          <Pane className="img-container">
            <ImageButton
              key=""
              id="1"
              img_name="top-img"
              heading="Air Max Summer"
              sub_heading="The Best of Air Max for your best summer ever"
            />
          </Pane>
        </Pane>
        <Pane className="container">
          <Pane>
            <Heading className="header-img">Trending</Heading>
          </Pane>
          <Pane className="img-container">
            {this.state.trending_images.map((image) => (
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
        <Pane className="container">
          <Pane>
            <Heading className="header-img">Featured Styles</Heading>
          </Pane>
          <Pane className="img-container">
            {this.state.featured_images.map((image) => (
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
        <Pane className="container">
          <Pane>
            <Heading className="header-img">More To Explore</Heading>
          </Pane>
          <Pane className="img-container">
            {this.state.explored_images.map((image) => (
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
      </Pane>
    );
  }
}

export default HomePageComponents;
