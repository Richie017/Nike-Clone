import React, { Component } from 'react';
import {
    Pane
  } from "evergreen-ui";
import './assets/css/header/header.css'
import './App.css';
import PreHeader from './components/header/PreHeader';
import TopNavBar from './components/header/TopNavBar';
import Trending from './pages/components/Trending';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <Pane className="main-container">
                <PreHeader />
                <TopNavBar />
                <Trending />
                <Footer />
            </Pane>
        );
    }
}

export default App;
