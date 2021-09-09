import React, { Component } from "react";
import { Pane, Heading, Tab, Text, TabNavigation } from "evergreen-ui";
import { NavLink } from "react-router-dom";
import ImageButton from "../components/ImageButton";
import {
  landing_images,
  featured_images,
  explored_images,
  trending_images,
  categories,
} from "../../data/ImageData";

class WomenPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landing_images: [...landing_images],
      featured_images: [...featured_images],
      explored_images: [...explored_images],
      trending_images: [...trending_images],
      categories: [...categories],
    };
  }

  render() {
    return (
      <Pane>
        <Pane className="landing-nav">
          <Text className="landing-nav-txt">Women</Text>

          <Pane classnName="landing-nav-pane">
            <TabNavigation>
              <Pane className="navbar">
                {this.state.categories.map((tab) => (
                  <Tab className="navbar-tab" key={tab.id}>
                    <NavLink
                      exact
                      to={{ pathname: tab.url , state: {headdata: tab.title} }}
                      style={{ color: "#000", textDecoration: "none" }}>
                      {tab.title}
                    </NavLink>
                  </Tab>
                ))}
              </Pane>
            </TabNavigation>
          </Pane>

          <Text style={{color: "#fff"}}>Women</Text>
        </Pane>
        <Pane className="container">
          <Pane className="img-container">
            {this.state.landing_images.map((image) => (
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
            <Heading className="header-img">Shop The Essentials</Heading>
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
        <Pane className="container">
          <Pane>
            <Heading className="header-img">Featured FootWaer</Heading>
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

export default WomenPage;
