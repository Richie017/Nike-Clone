import React, { Component } from 'react';

import './App.css';
import PreHeader from './components/header/preheader';
import Topnavbar from './components/header/Topnavbar';
import Trending from './pages/components/Trending';
import Footer from './components/footer';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <PreHeader />
                <Topnavbar />
                <Trending />
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
