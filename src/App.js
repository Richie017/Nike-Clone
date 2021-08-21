import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import PreHeader from "./components/header/PreHeader";
import TopNavBar from "./components/header/TopNavBar";
import Banner from "./components/header/Banner";
import Footer from "./components/Footer";
import HomePageComponents from "./pages/home/model/HomePageComponents";
import ProductPage from "./pages/products/ProductPage";
import MenPage from "./pages/Men/MenPage";
import WomenPage from "./pages/Women/WomenPage";
import KidsPage from "./pages/Kids/KidsPage";

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

            <Route exact path="/men">
              <MenPage />
            </Route>
            <Route exact path="/women">
              <WomenPage />
            </Route>
            <Route exact path="/kids">
              <KidsPage />
            </Route>
            <Route
              exact
              path="/:category"
              render={(props) => <ProductPage {...props} />}
            />

            {/* <Route exact path="/:category/:subcategory">
                    <ProductPage />
                </Route>
                <Route exact path="/:category/:subcategory/:subsubcategory">
                    <products />
                </Route>
                    <ProductPage />
                </Route>*/}
          </Switch>

          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
