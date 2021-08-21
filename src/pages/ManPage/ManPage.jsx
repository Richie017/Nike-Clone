import React, { Component } from "react";
import { Pane, Heading, Tab, Text, TabNavigation } from "evergreen-ui";
import { NavLink } from "react-router-dom";
import ImageButton from "../components/ImageButton";

class ManPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landing_images: [
        {
          id: "1",
          img_name: "Men_Landing",
          heading: "Layer On The Heat",
          sub_heading:
            "Stack up on miss-and-match styles and warm things up this fall",
        },
      ],
      featured_images: [
        {
          id: "1",
          img_name: "featured_men",
          heading: "Always On Repeat",
          sub_heading:
            "Shoes under $100 & under, featuring the Nike court legacy",
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
          img_name: "jacket",
          heading: "Clothing",
          sub_heading: "",
          caption: "out-place",
        },
        {
          id: "2",
          img_name: "shoes",
          heading: "Footwear",
          sub_heading: "",
          caption: "out-place",
        },
        {
          id: "3",
          img_name: "bagpack",
          heading: "Accessories",
          sub_heading: "",
          caption: "out-place",
        },
        {
          id: "4",
          img_name: "bagpack",
          heading: "Accessories",
          sub_heading: "",
          caption: "out-place",
        },
      ],
      categories: [
        {
          id: "1",
          title: "Shoes",
          url: "/#",
        },
        {
          id: "2",
          title: "Clothing",
          url: "/#",
        },
        {
          id: "1",
          title: "Sales",
          url: "/#",
        },
      ],
    };
  }

  render() {
    return (
      <Pane>
        <Pane className="landing-nav">
          <Text className="landing-nav-txt">Men</Text>

          <Pane classnName="landing-nav-pane">
            <TabNavigation
              style={{
                textAlign: "center",
                paddingLeft: "30px",
                marginLeft: "700px",
              }}>
              <Pane className="navbar">
                {this.state.categories.map((tab) => (
                  <Tab className="navbar-tab" key={tab.id}>
                    <NavLink
                      exact
                      to={{ pathname: tab.url }}
                      style={{ color: "#000", textDecoration: "none" }}>
                      {tab.title}
                    </NavLink>
                  </Tab>
                ))}
              </Pane>
            </TabNavigation>
          </Pane>
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

export default ManPage;
