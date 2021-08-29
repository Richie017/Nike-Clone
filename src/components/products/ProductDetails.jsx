import React, { Component } from 'react'
import { Pane } from "evergreen-ui";

export default class ProductDetails extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            productdetails: this.props.location.state.productdetails,
        };
      }
    render() {
        return (
            <Pane>
                {this.state.productdetails.name}
                {this.state.productdetails.type}
                {this.state.productdetails.tag}
                {this.state.productdetails.color}
                {this.state.productdetails.size}
                {this.state.productdetails.price}
                {this.state.productdetails.img}
            </Pane>
        )
    }
}
