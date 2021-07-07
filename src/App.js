import React, { Component } from 'react';
import './App.css';
import PreHeader from './components/header/PreHeader';
import TopNavBar from './components/header/TopNavBar';
import Trending from './pages/components/Trending';
import Footer from './components/Footer';
import Featured from "./pages/components/Featured";
import SingleImage from "./pages/components/SingleImage";
import TripleImage from "./pages/components/TripleImage";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PreHeader />
        <TopNavBar />
        <SingleImage />
        <Featured />
        <Trending />
        <TripleImage />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
