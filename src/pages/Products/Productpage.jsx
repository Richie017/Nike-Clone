import React, { Component } from "react";
import Products from "../../components/Products/Products";
import ProductNav from "../../components/Products/ProductNav";
import { Productdata } from "../../data/Productdata";
import { Pane, Select, Button, Heading , MinimizeIcon} from "evergreen-ui";
import "../../assets/css/products/product.css";

export default class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [...Productdata],
      shownavbar: true
    };
  }

  render(){
    const {params} = this.props.match;

    return (
      <Pane>
        <Pane display="flex" padding={16}>
          <Pane flex={1} alignItems="center" display="flex">
            <Heading size={600}>{params.category}</Heading>
          </Pane>
          <Pane>
          
            <Button className="menu-hide-btn" marginRight={16} onClick={(e) => this.setState(prevState => ({shownavbar: !prevState.shownavbar}))}>Hide Filters<MinimizeIcon color="muted" size={12} marginLeft={10} /></Button>
            <Select onChange={(event) => event.target.value}>
              <option value="1">
                Featured
              </option>
              <option value="2">Newest</option>
              <option value="3">Price: High-Low</option>
              <option value="4">Price: Low-High</option>
            </Select>
          </Pane>
        </Pane>
        <Pane style={{ display: "flex" }}>
        { this.state.shownavbar ?  <ProductNav products={this.state.products} /> : null }
         
          <Products products={this.state.products} />
        </Pane>
      </Pane>
    );
  }
}
