import React, { Component } from 'react';

import Topnavbar from './components/header/navbar/Topnavbar';
import Footer from './components/footer';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Topnavbar />
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
