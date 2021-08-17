import React, { Component } from "react";
import { Pane, Radio } from "evergreen-ui";

export default class ProductNav extends Component {
  render() {
    const productnavclass = this.props.shownav
      ? "product-nav"
      : "product-nonav";
    return (
      <Pane className={productnavclass}>
        <Pane>
          <h2>Product search & sort here</h2>
        </Pane>
        <Pane aria-label="Radio Group Label 12" role="group">
          <Radio name="group" label="Dress" />
          <Radio name="group" checked label="Pants" />
          <Radio name="group" disabled label="Shoes" />
          <Radio checked name="group" label="Undergarments" />
        </Pane>
      </Pane>
    );
  }
}
