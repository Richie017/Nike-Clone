import React, { Component } from "react";
import {
  Pane,
  Button,
  CaretDownIcon,
  CaretUpIcon,
  StarIcon,
  StarEmptyIcon,
} from "evergreen-ui";
import "../../assets/css/productdetails/productdetails.css";

class ProductReview extends Component {
  state = {
    visibility: false,
    rating: 4,
  };
  toggleVisibility = () => {
    this.setState({ visibility: !this.state.visibility });
  };
  render() {
    const { visibility, rating } = this.state;
    var rows = [];
    for (var i = 1; i <= 5; i++) {
      rows.push(
        <Button
          className="toggle-icon"
          margin={0}
          onClick={this.toggleVisibility}
          iconAfter={i <= rating ? StarIcon : StarEmptyIcon}
        />
      );
    }
    return (
      <>
        <Pane className="toggle-view">
          <Pane display="flex" marginBottom={15}>
            <Button className="toggle-btn" onClick={this.toggleVisibility}>
              Reviews(0)
            </Button>
            {rows}
            <Button
              className="toggle-icon"
              onClick={this.toggleVisibility}
              iconAfter={visibility === true ? CaretUpIcon : CaretDownIcon}
            />
          </Pane>
        </Pane>
        {visibility && (
          <Pane>
            {rows} 4 stars
            <br />
            <a href="/#">Write a Review</a>
          </Pane>
        )}
      </>
    );
  }
}

export default ProductReview;
