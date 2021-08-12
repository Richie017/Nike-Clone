import React, { Component } from "react";
import {CategoryData} from "../../data/CategoryData";
import { NavLink} from 'react-router-dom';
import {
  Pane,
  TabNavigation,
  Tab,
  SearchInput,
  IconButton,
  ShoppingCartIcon,
  HeartIcon,
  Tooltip,
  majorScale
} from "evergreen-ui";
import nike from "../../assets/images/nike.png";
import "../../assets/css/header/header.css";

class TopNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
     categories: [...CategoryData]
    };
  }

  componentDidMount(){
    console.log(this.state.categories);
  }

  render() {
    return (
      <Pane
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/*Nike logo*/}
        <Pane className="logo">
          <a href="/"><img src={nike} alt=""/></a>
        </Pane>

        {/*Category & Subcategory*/}
        <Pane className="commonCategory">
          <TabNavigation
            style={{
              textAlign: "center",
              paddingLeft: "30px"
            }}
          >
            {this.state.categories.map((category) => (
              <Pane className="subnav">
                <Tab className="top-navbar" key={category.id}>
                  <NavLink exact to = {{pathname: category.url}} 
                  style={{color: "#000", textDecoration: 'none'}}>{category.title}</NavLink>
                </Tab>
                <Pane className="subnav-content">
                  {category.subCategory.map((subLink) => (
                    <Pane className="column">
                      <Tab
                        className="common-subcategory"
                        key={subLink.id}
                      >
                         <NavLink exact to={{pathname: subLink.url}} style={{color: "#000", textDecoration: 'none'}}>{subLink.title}</NavLink>
                      </Tab>
                      {subLink.subsubCategory.map((subsubLink) => (
                        <Tab 
                        
                        key={subsubLink.id} >
                          <NavLink exact to={{pathname: subsubLink.url}} className="common-sub-subcategory">{subsubLink.title}</NavLink>
                        </Tab>
                      ))}
                    </Pane>
                  ))}
                </Pane>
              </Pane>
            ))}
          </TabNavigation>
        </Pane>

        {/*Searchbar, bookmarkbtn, cartbtn*/}
        <Pane>
          <SearchInput placeholder="SEARCH" width="160px" className="searchbar"/>

          <Tooltip content="Add to Bookmark">
            <IconButton
              color="success"
              icon={HeartIcon}
              marginLeft={majorScale(2)}
            />
            {/*<HeartIcon color="muted" size={30} marginLeft={majorScale(2)} />*/}
          </Tooltip>

          <Tooltip content="Add to Cart">
            <IconButton icon={ShoppingCartIcon} margin={majorScale(2)} />
          </Tooltip>
        </Pane>
      </Pane>
    );
  }
}

export default TopNavBar;
