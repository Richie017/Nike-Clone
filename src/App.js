import React, { Component } from 'react';

import Topnavbar from './components/header/navbar/Topnavbar';
import './assets/css/App.css';
import Trending from './components/Trending';
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
