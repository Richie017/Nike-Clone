import React, { Component } from "react";
import Product from "./Product";

import { Pane } from "evergreen-ui";
import "../../assets/css/products/product.css";

export default class Products extends Component {
  render() {
    const productclass = this.props.shownav ? "products" : "products-nonav";
    return (
      <Pane className={productclass}>
        {this.props.products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            type={product.type}
            tag={product.tag}
            img={product.img}
            color={product.color}
            size={product.size}
            price={product.price}
          />
        ))}
      </Pane>
    );
  }
}
