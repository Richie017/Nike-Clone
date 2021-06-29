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
    //this.dd = this.dd.bind(this);
    this.state = {
      catagories: [
        {
          id: 1,
          title: "New Releases",
          url: "/new",
          subCategory: [
            {
              id: 1,
              title: "New & Featured",
              url: "/#"
            },
            {
              id: 2,
              title: "New For Men",
              url: "/#"
            },
            {
              id: 3,
              title: "New For Women",
              url: "/#"
            },
            {
              id: 4,
              title: "New For Kids",
              url: "/#"
            }
          ]
        },
        {
          id: 2,
          title: "Men",
          url: "/men",
          subCategory: [
            {
              id: 1,
              title: "New & Featured",
              url: "/#"
            },
            {
              id: 2,
              title: "Shoes",
              url: "/#"
            },
            {
              id: 3,
              title: "Clothing",
              url: "/#"
            },
            {
              id: 4,
              title: "Accessories & Equipment",
              url: "/#"
            },
            {
              id: 5,
              title: "Shop Collection",
              url: "/#"
            }
          ]
        },
        {
          id: 3,
          title: "Women",
          url: "/women",
          subCategory: [
            {
              id: 1,
              title: "New & Featured",
              url: "/#"
            },
            {
              id: 2,
              title: "Shoes",
              url: "/#"
            },
            {
              id: 3,
              title: "Clothing",
              url: "/#"
            },
            {
              id: 4,
              title: "Accessories & Equipment",
              url: "/#"
            },
            {
              id: 5,
              title: "Shop Collection",
              url: "/#"
            }
          ]
        },
        {
          id: 4,
          title: "Kids",
          url: "/kids",
          subCategory: [
            {
              id: 1,
              title: "New & Featured",
              url: "/#"
            },
            {
              id: 2,
              title: "Boys Shoes",
              url: "/#"
            },
            {
              id: 3,
              title: "Girls Shoes",
              url: "/#"
            },
            {
              id: 4,
              title: "Boys Clothing",
              url: "/#"
            },
            {
              id: 5,
              title: "Girls Clothing",
              url: "/#"
            },
            {
              id: 6,
              title: "Baby & Toddler",
              url: "/#"
            },
            {
              id: 7,
              title: "Accessories & Equipment",
              url: "/#"
            }
          ]
        },
        {
          id: 5,
          title: "Customize",
          url: "/custom",
          subCategory: [
            {
              id: 1,
              title: "New & Featured",
              url: "/#"
            },
            {
              id: 2,
              title: "Mens",
              url: "/#"
            },
            {
              id: 3,
              title: "Womens",
              url: "/#"
            }
          ]
        },
        {
          id: 6,
          title: "Sale",
          url: "/sale",
          subCategory: [
            {
              id: 1,
              title: "Sale",
              url: "/#"
            },
            {
              id: 2,
              title: "Mens Sale",
              url: "/#"
            },
            {
              id: 3,
              title: "Womens Sale",
              url: "/#"
            },
            {
              id: 4,
              title: "Kids Sale",
              url: "/#"
            }
          ]
        }
      ]
    };
  }

  /*dd () {
    return <Pane>{this.catagories.subCategory.map(subLink => <a key={subLink.id} className="footerLink" href={subLink.url}>{subLink.title}</a>)}</Pane>
  }*/
  
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
        <Pane className="commonCategory">
          <TabNavigation
            style={{
              textAlign: "center",
              marginLeft: "70px",
            }}
          >
            {this.state.catagories.map((category) => (
                <Pane className="subnav">
                  <Tab
                    className="Topnavbar"
                    key={category.id}
                    is="a"
                    href="#"
                  >
                    {category.title}
                  </Tab>
                  <Pane className="subnav-content">
                    {category.subCategory.map(subLink => <Tab className="commonSubCategory" key={subLink.id} is="a" href={subLink.url}>{subLink.title}</Tab>)}
                  </Pane>
                </Pane>
              
            ))}
           {/* <Pane className="commonSubCategory">
              {this.state.catagories.map((cat) => (
                <Pane key={cat.id}>
                  {cat.subCategory.map((subcat) => (
                    <Tab key={subcat.id} href={subcat.url}>{subcat.title}</Tab>
                  ))}
                </Pane>
              ))}
            </Pane>
            */}
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
