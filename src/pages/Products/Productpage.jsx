import React, { Component } from "react";
import Products from "../../components/Products/Products";
import Productnav from "../../components/Products/Productnav";
import { Productdata } from "../../data/Productdata";
import { Pane, Select, option, Button, Heading , MinimizeIcon} from "evergreen-ui";

export default class Productpage extends Component {
  constructor() {
    super();
    this.state = {
      products: [...Productdata],
      selected: "Featured",
    };
  }

  render() {
    return (
      <Pane>
        <Pane display="flex" padding={16}>
          <Pane flex={1} alignItems="center" display="flex">
            <Heading size={600}>Category Name</Heading>
          </Pane>
          <Pane>
          
            <Button marginRight={16}>Hide Filters<MinimizeIcon color="muted" size={12} marginLeft={10} /></Button>
            <Select onChange={(event) => event.target.value}>
              <option value="1" selected>
                Featured
              </option>
              <option value="2">Newest</option>
              <option value="3">Price: High-Low</option>
              <option value="4">Price: Low-High</option>
            </Select>
          </Pane>
        </Pane>
        <Pane style={{ display: "flex" }}>
          <Productnav products={this.state.products} />
          <Products products={this.state.products} />
        </Pane>
      </Pane>
    );
  }
}
