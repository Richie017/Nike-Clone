import React, { Component } from "react";
import { Pane } from "evergreen-ui";
import { NavLink } from "react-router-dom";
import "../../assets/css/products/product.css";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      type: this.props.type,
      tag: this.props.tag,
      color: this.props.color,
      price: this.props.price,
      category: this.props.category,
      description: this.props.description,
      showimage: this.props.color[0].img[0],
      showcolor: false,
    };
  }

  render() {
    return (
      <Pane
        className="product"
        onMouseEnter={(e) =>
          this.setState(() => ({
            showcolor: true,
          }))
        }
        onMouseLeave={(e) =>
          this.setState(() => ({
            showcolor: false,
          }))
        }
      >
        <NavLink
          exact
          to={{
            pathname: "/" + this.state.category + "/" + this.state.name,
            state: { productdetails: this.state },
          }}
          style={{ color: "#000", textDecoration: "none" }}
        >
          <img
            className="product-img"
            src={
              require("../../pages/assets/images/products/" +
                this.state.showimage)?.default
            }
            alt=""
          />
          <Pane>
            {this.state.showcolor && this.state.color.length > 1 ? (
              <Pane>
                {this.state.color.map((variation) => (
                  <img
                    className="product-image-small"
                    onMouseOver={(e) =>
                      this.setState(() => ({
                        showimage: variation.img[0],
                      }))
                    }
                    src={
                      require("../../pages/assets/images/products/" +
                        variation.img[0])?.default
                    }
                    alt=""
                  />
                ))}
              </Pane>
            ) : (
              <Pane>
                <Pane className="product-tag">
                  {this.state.tag ? this.state.tag : null}
                </Pane>
                <Pane className="product-name">{this.state.name}</Pane>
                <Pane className="product-type">{this.state.type}</Pane>
                <Pane className="product-color">
                  {this.state.color.length} color
                </Pane>
              </Pane>
            )}

            <Pane className="product-price">${this.state.price} </Pane>
          </Pane>
        </NavLink>
      </Pane>
    );
  }
}
