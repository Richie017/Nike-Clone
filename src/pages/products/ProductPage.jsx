import React, { Component } from "react";
import Products from "../../components/products/Products";
import ProductNav from "../../components/products/ProductNav";
import { ProductData } from "../../data/ProductData";
import {
  Pane,
  Select,
  Button,
  Heading,
  MinimizeIcon,
  MaximizeIcon,
} from "evergreen-ui";
import "../../assets/css/products/product.css";

export default class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [...ProductData],
      showNavBar: true,
    };
  }

  render() {
    const headname = this.props.location.headdata;
    return (
      <Pane>
        <Pane display="flex" padding={16}>
          <Pane flex={1} alignItems="center" display="flex">
            <Heading size={600}>{headname}</Heading>
          </Pane>
          <Pane>
            <Button
              className="menu-hide-btn"
              marginRight={16}
              onClick={(e) =>
                this.setState((prevState) => ({
                  showNavBar: !prevState.showNavBar,
                }))
              }
            >
              {this.state.showNavBar ? "Hide Filters" : "Show Filters"}
              {this.state.showNavBar ? (
                <MinimizeIcon color="muted" size={12} marginLeft={10} />
              ) : (
                <MaximizeIcon color="muted" size={12} marginLeft={10} />
              )}
            </Button>
            <Select onChange={(event) => event.target.value}>
              <option value="1">Featured</option>
              <option value="2">Newest</option>
              <option value="3">Price: High-Low</option>
              <option value="4">Price: Low-High</option>
            </Select>
          </Pane>
        </Pane>
        <Pane style={{ display: "flex" }}>
          <ProductNav
            products={this.state.products}
            shownav={this.state.showNavBar}
          />
          <Products
            products={this.state.products}
            shownav={this.state.showNavBar}
          />
        </Pane>
      </Pane>
    );
  }
}
