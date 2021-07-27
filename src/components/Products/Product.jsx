import React, { Component } from "react";
import { Pane } from "evergreen-ui";
import "../../assets/css/products/product.css";

export default class Product extends Component {
  render() {
    const { name, type, tag, img, color, size, price } = this.props;

    return (
      <Pane className="product">
        <img
          className="product-img"
          src={require("../../pages/assets/images/Products/" + img)?.default}
          alt=""
        />
        <Pane >
          <Pane className="product-tag">{tag ? tag : null}</Pane>
          <Pane className="product-name">{name}</Pane>
          <Pane className="product-type">{type}</Pane>
          <Pane className="product-color">{color.length} color</Pane>
          <Pane className="product-price">${price} </Pane>
        </Pane>

      </Pane>
    );
  }
}
