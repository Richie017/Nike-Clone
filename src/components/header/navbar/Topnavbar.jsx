import React, { Component } from "react";
import {
  Pane,
  TabNavigation,
  Tab,
  SearchInput,
  IconButton,
  ShoppingCartIcon,
  StarIcon,
  Tooltip,
  majorScale,
} from "evergreen-ui";
import nike from "../../../assets/img/nike.png";

class Topnavbar extends Component {
  //state declaration
  constructor(props) {
    super(props);
    this.state = {
      catagories: [
        {
          id: 1,
          title: "NEW RELEASES",
          hover: false,
        },
        {
          id: 2,
          title: "MEN",
          hover: false,
        },
        {
          id: 3,
          title: "WOMEN",
          hover: false,
        },
        {
          id: 4,
          title: "KIDS",
          hover: false,
        },
        {
          id: 5,
          title: "CUSTOMIZE",
          hover: false,
        },
        {
          id: 6,
          title: "SALE",
          hover: false,
        },
        {
          id: 7,
          title: "COLLECTION",
          hover: false,
        },
      ],
    };
  }

  tabStyle = (hover) => {
    return {
      
      padding: "10px",
      height: "71px",
      backgroundColor: "#fff",
      border: "0px",
      borderRadius: "0px",
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      borderBottomColor: hover ? "#000000" : "#ffffff",
      color: "#000",
      textAlign: "center",
      fontSize: "15px",
    };
  };

  render() {
    return (
      <Pane
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}>

      {/*Nike logo*/}
        <Pane padding="10px">
          <img src={nike} alt="" />
        </Pane>

      {/*Category & Subcategory*/}
        <Pane> 
          <TabNavigation
            style={{
              textAlign: "center",
              marginLeft: "30px",
            }}
          >
            {this.state.catagories.map((category) => (
              <Tab
                style={this.tabStyle(category.hover)}
                key={category.id}
                is="a"
                href="#"
                onMouseEnter={() =>
                  this.setState(() => (category.hover = true))
                }
                onMouseLeave={() =>
                  this.setState(() => (category.hover = false))
                }
              >
                {category.title}
              </Tab>
            ))}
          </TabNavigation>
        </Pane>
        
      {/*Seachbar, bookmarkbtn, cartbtn*/}
        <Pane>
          <SearchInput placeholder="SEARCH" width="200px" />

          <Tooltip content="Add to Bookmark">
            <IconButton icon={StarIcon} marginLeft={majorScale(2)} />
          </Tooltip>

          <Tooltip content="Add to Cart">
            <IconButton icon={ShoppingCartIcon} margin={majorScale(2)} />
          </Tooltip>
        </Pane>
      </Pane>
    );
  }
}

export default Topnavbar;
