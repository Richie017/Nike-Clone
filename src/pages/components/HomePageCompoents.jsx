import React, { Component } from "react";
import { Pane } from "evergreen-ui";
import SingleImage from "./SingleImage";
import TripleImage from "./TripleImage";
import Trending from "./Trending";
import Featured from "./Featured";

class HomePageComponents extends Component {
  render() {
    return (
      <Pane>
        <SingleImage />
        <Featured />
        <Trending />
        <TripleImage />
      </Pane>
    );
  }
}

export default HomePageComponents;
