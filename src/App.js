import React, { Component } from 'react';

import Topnavbar from './components/header/Topnavbar';
import './App.css';
import Trending from './pages/components/Trending';
import Footer from './components/footer';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Topnavbar />
                <Trending />
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
