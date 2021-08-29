import React, { Component } from "react";
import { Pane } from "evergreen-ui";
import { NavLink } from "react-router-dom";
import "../../assets/css/products/product.css";


export default class Product extends Component {
  render() {
    const { id ,name, type, tag, img, color, price, category} = this.props;

    return (
      <Pane className="product">
        <NavLink
          exact
          to={{
            pathname: "/"+category +"/"+name, state: {productdetails: this.props}
          }}
          style={{color: "#000", textDecoration: "none"}}
        >
          <img
            className="product-img"
            src={require("../../pages/assets/images/products/" + img)?.default}
            alt=""
          />
          <Pane >
            <Pane className="product-tag">{tag ? tag : null}</Pane>
            <Pane className="product-name">{name}</Pane>
            <Pane className="product-type">{type}</Pane>
            <Pane className="product-color">{color.length} color</Pane>
            <Pane className="product-price">${price} </Pane>
          </Pane>
        </NavLink>
      </Pane>
    );
  }
}
