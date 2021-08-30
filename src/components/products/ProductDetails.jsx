import React, { Component } from "react";
import {
  Pane,
  HeartIcon,
  Button,
  UnorderedList,
  ListItem,
  CaretUpIcon,
  CaretDownIcon,
} from "evergreen-ui";
import ImageGallery from "./ImageGallery";
import ProductName from "./ProductName";
import ProductSize from "./ProductSize";
import ProductColor from "./ProductColor";
import "../../assets/css/productdetails/productdetails.css";

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productdetails: this.props.location.state.productdetails,
      colorIndex: 0,
      visibility: false,
    };
  }
  toggleVisibility = () => {
    this.setState({ visibility: !this.state.visibility });
  };

  getColorIndex = (index) => {
    this.setState({ colorIndex: index });
  };
  render() {
    const { name, type, price, color, description } = this.state.productdetails;
    const { colorIndex, visibility } = this.state;

    return (
      <>
        <Pane className="main-container">
          <Pane className="main-section">
            <Pane className="img-section">
              {color[colorIndex].img.map((image) => (
                <ImageGallery key={Math.random()} images={image} />
              ))}
            </Pane>
            <Pane className="details-section">
              <ProductName name={name} type={type} price={price} />
              <ProductColor colors={color} getColorIndex={this.getColorIndex} />
              <ProductSize sizes={color[colorIndex].size} />
              <Pane>
                <button className="black-btn"> Add to Bag</button>
                <Button className="white-btn" iconAfter={HeartIcon}>
                  Favorite
                </Button>
              </Pane>
              <Pane className="static-section">
                <p className="shipping">
                  Shipping* <br />
                  To get accurate shipping information{" "}
                  <a href="/#">Edit Location</a>
                </p>
                <p className="pickup">
                  Pickup <br />
                  <a href="/#">Find a Store</a>
                </p>
              </Pane>
              <Pane className="product-description">
                <Pane>{description}</Pane>
                <UnorderedList marginTop={20}>
                  <ListItem color="black" fontSize={15}>
                    Shown: {color[colorIndex].shown}
                  </ListItem>
                  <ListItem color="black" fontSize={15}>
                    Style: {color[colorIndex].style}
                  </ListItem>
                </UnorderedList>
                <a href="/#">View Product Details</a>
              </Pane>
              <Pane>
                <Pane display="flex">
                  <Button
                    className="toggle-btn"
                    onClick={this.toggleVisibility}>
                    Free Shipping & Returns
                  </Button>
                  <Button
                    className="toggle-icon"
                    onClick={this.toggleVisibility}
                    iconAfter={
                      visibility === true ? CaretUpIcon : CaretDownIcon
                    }
                  />
                  {visibility && (
                    <Pane>
                      Free standard shipping and free 60-day returns for Nike
                      Members.<a href="\#"> Learn more.</a>{" "}
                      <a href="\#">Return policy exclusions apply.</a>
                      <br />
                      <br />
                      <a href="\#">Pick-up available at select Nike Stores.</a>
                    </Pane>
                  )}
                </Pane>
              </Pane>
            </Pane>
          </Pane>
        </Pane>
      </>
    );
  }
}
