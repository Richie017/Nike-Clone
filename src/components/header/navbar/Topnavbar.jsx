import React, { Component } from "react";
import {
  Pane,
  TabNavigation,
  Tab,
  SearchInput,
  IconButton,
  ShoppingCartIcon,
  HeartIcon,
  Tooltip,
  majorScale,
} from "evergreen-ui";
import nike from "../../../assets/img/nike.png";
import '../../../assets/css/header/header.css';

class Topnavbar extends Component {
  //state declaration
  constructor(props) {
    super(props);
    this.state = {
      catagories: [
        {
          id: 1,
          title: "New Releases",
          url: "/new",
        },
        {
          id: 2,
          title: "Men",
          url: "/men",
        },
        {
          id: 3,
          title: "Women",
          url: "/women",
        },
        {
          id: 4,
          title: "Kids",
          url: "/kids",
        },
        {
          id: 5,
          title: "Customize",
          url: "/custom",
        },
        {
          id: 6,
          title: "Sale",
          url: "/sale",
        },
      ],
    };
  }

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
              marginLeft: "70px",
            }}
          >
            {this.state.catagories.map((category) => (
              <Tab
                className = "Topnavbar"
                key={category.id}
                is="a"
                href="#"
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
           <IconButton color="success" icon={HeartIcon} marginLeft={majorScale(2)} />
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

export default Topnavbar;
