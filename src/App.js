import React, { Component } from 'react';
import './App.css';
import PreHeader from './components/header/PreHeader';
import TopNavBar from './components/header/TopNavBar';
import Trending from './pages/components/Trending';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <PreHeader />
                <TopNavBar />
                <Trending />
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
