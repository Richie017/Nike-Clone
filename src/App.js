import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import PreHeader from "./components/header/PreHeader";
import TopNavBar from "./components/header/TopNavBar";
import Banner from "./components/header/Banner";
import Footer from "./components/Footer";
import Productpage from "./pages/Products/ProductPage";
import HomePageComponents from "./pages/components/HomePageCompoents";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <PreHeader />
          <TopNavBar />
          <Banner />

            <Switch>
                <Route exact path="/">
                    <HomePageComponents />
                </Route>
                <Route exact path="/:category" render={(props) => <Productpage {...props} /> } />

               {/* <Route exact path="/:category/:subcategory">
                    <Productpage />
                </Route>
                <Route exact path="/:category/:subcategory/:subsubcategory">
<<<<<<< HEAD
                    <Products />
                </Route>

=======
                    <Productpage />
                </Route>*/}
             
>>>>>>> f5ceb57 (add: initial structure for product pages)
            </Switch>

          <Footer />
        </Router>

      </React.Fragment>
    );
  }
}

export default App;
