import React, { Component } from "react";

import "./App.css";
import PreHeader from "./components/header/PreHeader";
import TopNavBar from "./components/header/TopNavBar";
import Footer from "./components/Footer";
import HomePageComponents from "./pages/components/HomePageCompoents";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PreHeader />
        <TopNavBar />
        <HomePageComponents />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
