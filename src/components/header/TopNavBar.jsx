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
  majorScale
} from "evergreen-ui";
import nike from "../../assets/images/nike.png";
import "../../assets/css/header/header.css";

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
          subCategory: [
            {
              id: 1,
              title: "New & Featured",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "Shop All New Arrivals",
                  url: "/#",
                },
                {
                  id: 2,
                  title: "SNKRS Launch Calender",
                  url: "/#",
                },
                {
                  id: 3,
                  title: "Best of Air Max ",
                  url: "/#",
                },
                {
                  id: 4,
                  title: "Member Access",
                  url: "/#",
                },
                {
                  id: 5,
                  title: "USA Team Gear",
                  url: "/#",
                },
                {
                  id: 6,
                  title: "Red, White & Blue",
                  url: "/#",
                },
                {
                  id: 7,
                  title: "Nike x Space Jam",
                  url: "/#",
                },
              ],
            },
            {
              id: 2,
              title: "New For Men",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "Shoes",
                  url: "/#",
                },
                {
                  id: 2,
                  title: "Clothing",
                  url: "/#",
                },
                {
                  id: 3,
                  title: "Equipment",
                  url: "/#",
                },
                {
                  id: 4,
                  title: "Shop All New",
                  url: "/#",
                },
              ],
            },
            {
              id: 3,
              title: "New For Women",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "Shoes",
                  url: "/#",
                },
                {
                  id: 2,
                  title: "Clothing",
                  url: "/#",
                },
                {
                  id: 3,
                  title: "Equipment",
                  url: "/#",
                },
                {
                  id: 4,
                  title: "Shop All New",
                  url: "/#",
                },
              ],
            },
            {
              id: 4,
              title: "New For Kids",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "Boys Shoes",
                  url: "/#",
                },
                {
                  id: 2,
                  title: "Boys Clothing",
                  url: "/#",
                },
                {
                  id: 3,
                  title: "Girls Shoes",
                  url: "/#",
                },
                {
                  id: 4,
                  title: "Girls Clothing",
                  url: "/#",
                },
                {
                  id: 5,
                  title: "Shop All New",
                  url: "/#",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          title: "Men",
          url: "/men",
          subCategory: [
            {
              id: 1,
              title: "New & Featured",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "Shop All New Arrivals",
                  url: "/#",
                },
                {
                  id: 2,
                  title: "Best Sellers",
                  url: "/#",
                },
                {
                  id: 3,
                  title: "Best of Air Max ",
                  url: "/#",
                },
                {
                  id: 4,
                  title: "Trending Wovenshorts",
                  url: "/#",
                },
                {
                  id: 5,
                  title: "Cross Country Gear",
                  url: "/#",
                },
                {
                  id: 6,
                  title: "Red, White & Blue",
                  url: "/#",
                },
                {
                  id: 7,
                  title: "Nike x Space Jam",
                  url: "/#",
                },
              ],
            },
            {
              id: 2,
              title: "Shoes",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "Lifestyle",
                  url: "/#",
                },
                {
                  id: 2,
                  title: "Running",
                  url: "/#",
                },
                {
                  id: 3,
                  title: "Basketball",
                  url: "/#",
                },
                {
                  id: 4,
                  title: "Jordan",
                  url: "/#",
                },
                {
                  id: 5,
                  title: "Training & gym",
                  url: "/#",
                },
                {
                  id: 6,
                  title: "Soccer",
                  url: "/#",
                },
                {
                  id: 7,
                  title: "Golf",
                  url: "/#",
                },
                {
                  id: 8,
                  title: "Crosscountry",
                  url: "/#",
                },
                {
                  id: 9,
                  title: "Skateboarding",
                  url: "/#",
                },
                {
                  id: 10,
                  title: "Tennis",
                  url: "/#",
                },
                {
                  id: 11,
                  title: "Baseball",
                  url: "/#",
                },
                {
                  id: 12,
                  title: "Sandals & Sliders",
                  url: "/#",
                },
                {
                  id: 13,
                  title: "Shoes $100 & Under",
                  url: "/#",
                },
                {
                  id: 14,
                  title: "All Shoes",
                  url: "/#",
                },
              ],
            },
            {
              id: 3,
              title: "Clothing",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "Tops & T-shirt",
                  url: "/#",
                },
                {
                  id: 2,
                  title: "Shorts",
                  url: "/#",
                },
                {
                  id: 3,
                  title: "Hoodies & Sweatshirts",
                  url: "/#",
                },
                {
                  id: 4,
                  title: "Pants & Tights",
                  url: "/#",
                },
                {
                  id: 5,
                  title: "Matching Sets",
                  url: "/#",
                },
                {
                  id: 6,
                  title: "Jackets & Vests",
                  url: "/#",
                },
                {
                  id: 7,
                  title: "Swimwear",
                  url: "/#",
                },
                {
                  id: 8,
                  title: "Polos",
                  url: "/#",
                },
                {
                  id: 9,
                  title: "Nike Pro",
                  url: "/#",
                },
                {
                  id: 10,
                  title: "Yoga",
                  url: "/#",
                },
                {
                  id: 11,
                  title: "Socks",
                  url: "/#",
                },
                {
                  id: 12,
                  title: "Underwear",
                  url: "/#",
                },
                {
                  id: 13,
                  title: "Big & Tall",
                  url: "/#",
                },

                {
                  id: 14,
                  title: "Sandals & Slides",
                  url: "/#",
                },
                {
                  id: 15,
                  title: "Clothing $100 & Under",
                  url: "/#",
                },
                {
                  id: 16,
                  title: "All Shoes",
                  url: "/#",
                },
              ],
            },
            {
              id: 4,
              title: "Accessories & Equipment",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "Bags & Backpack ",
                  url: "/#",
                },
                {
                  id: 2,
                  title: "Apple Watch Nike",
                  url: "/#",
                },
                {
                  id: 3,
                  title: "Hats, Visors & Headbands",
                  url: "/#",
                },
              ],
            },
            {
              id: 5,
              title: "Shop Collection",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "Golf",
                  url: "/#",
                },
                {
                  id: 2,
                  title: "Jordan",
                  url: "/#",
                },
                {
                  id: 3,
                  title: "Soccer",
                  url: "/#",
                },
                {
                  id: 4,
                  title: "Running",
                  url: "/#",
                },
                {
                  id: 5,
                  title: "Basketball",
                  url: "/#",
                },
                {
                  id: 6,
                  title: "Tennis",
                  url: "/#",
                },
                {
                  id: 7,
                  title: "Nikelab",
                  url: "/#",
                },
                {
                  id: 8,
                  title: "Training & Gym",
                  url: "/#",
                },
                {
                  id: 9,
                  title: "Football",
                  url: "/#",
                },
                {
                  id: 10,
                  title: "Baseball",
                  url: "/#",
                },
                {
                  id: 11,
                  title: "Nike Sportswear",
                  url: "/#",
                },
                {
                  id: 12,
                  title: "ACG",
                  url: "/#",
                },
                {
                  id: 13,
                  title: "Skateboarding",
                  url: "/#",
                },

                {
                  id: 14,
                  title: "Lacrosse",
                  url: "/#",
                },
                {
                  id: 15,
                  title: "Fan Gear",
                  url: "/#",
                },
                {
                  id: 16,
                  title: "Nike Flyease",
                  url: "/#",
                },
              ],
            },
          ],
        },
        {
          id: 3,
          title: "Women",
          url: "/women",
          subCategory: [
            {
              id: 1,
              title: "New & Featured",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "Shop All New Arrivals",
                  url: "/#",
                },
                {
                  id: 2,
                  title: "Best Sellers",
                  url: "/#",
                },
                {
                  id: 3,
                  title: "Best of Air Max ",
                  url: "/#",
                },
                {
                  id: 4,
                  title: "Trending Wovenshorts",
                  url: "/#",
                },
                {
                  id: 5,
                  title: "Cross Country Gear",
                  url: "/#",
                },
                {
                  id: 6,
                  title: "Red, White & Blue",
                  url: "/#",
                },
                {
                  id: 7,
                  title: "Nike x Space Jam",
                  url: "/#",
                },
              ],
            },
            {
              id: 2,
              title: "Shoes",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "Lifestyle",
                  url: "/#",
                },
                {
                  id: 2,
                  title: "Running",
                  url: "/#",
                },
                {
                  id: 3,
                  title: "Basketball",
                  url: "/#",
                },
                {
                  id: 4,
                  title: "Jordan",
                  url: "/#",
                },
                {
                  id: 5,
                  title: "Training & gym",
                  url: "/#",
                },
                {
                  id: 6,
                  title: "Soccer",
                  url: "/#",
                },
                {
                  id: 7,
                  title: "Golf",
                  url: "/#",
                },
                {
                  id: 8,
                  title: "Crosscountry",
                  url: "/#",
                },
                {
                  id: 9,
                  title: "Skateboarding",
                  url: "/#",
                },
                {
                  id: 10,
                  title: "Tennis",
                  url: "/#",
                },
                {
                  id: 11,
                  title: "Baseball",
                  url: "/#",
                },
                {
                  id: 12,
                  title: "Sandals & Sliders",
                  url: "/#",
                },
                {
                  id: 13,
                  title: "Shoes $100 & Under",
                  url: "/#",
                },
                {
                  id: 14,
                  title: "All Shoes",
                  url: "/#",
                },
              ],
            },
            {
              id: 3,
              title: "Clothing",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "Tops & T-shirt",
                  url: "/#",
                },
                {
                  id: 2,
                  title: "Shorts",
                  url: "/#",
                },
                {
                  id: 3,
                  title: "Hoodies & Sweatshirts",
                  url: "/#",
                },
                {
                  id: 4,
                  title: "Pants & Tights",
                  url: "/#",
                },
                {
                  id: 5,
                  title: "Matching Sets",
                  url: "/#",
                },
                {
                  id: 6,
                  title: "Jackets & Vests",
                  url: "/#",
                },
                {
                  id: 7,
                  title: "Swimwear",
                  url: "/#",
                },
                {
                  id: 8,
                  title: "Polos",
                  url: "/#",
                },
                {
                  id: 9,
                  title: "Nike Pro",
                  url: "/#",
                },
                {
                  id: 10,
                  title: "Yoga",
                  url: "/#",
                },
                {
                  id: 11,
                  title: "Socks",
                  url: "/#",
                },
                {
                  id: 12,
                  title: "Underwear",
                  url: "/#",
                },
                {
                  id: 13,
                  title: "Big & Tall",
                  url: "/#",
                },

                {
                  id: 14,
                  title: "Sandals & Slides",
                  url: "/#",
                },
                {
                  id: 15,
                  title: "Clothing $100 & Under",
                  url: "/#",
                },
                {
                  id: 16,
                  title: "All Shoes",
                  url: "/#",
                },
              ],
            },
            {
              id: 4,
              title: "Accessories & Equipment",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "Bags & Backpack ",
                  url: "/#",
                },
                {
                  id: 2,
                  title: "Apple Watch Nike",
                  url: "/#",
                },
                {
                  id: 3,
                  title: "Hats, Visors & Headbands",
                  url: "/#",
                },
              ],
            },
            {
              id: 5,
              title: "Shop Collection",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "Golf",
                  url: "/#",
                },
                {
                  id: 2,
                  title: "Jordan",
                  url: "/#",
                },
                {
                  id: 3,
                  title: "Soccer",
                  url: "/#",
                },
                {
                  id: 4,
                  title: "Running",
                  url: "/#",
                },
                {
                  id: 5,
                  title: "Basketball",
                  url: "/#",
                },
                {
                  id: 6,
                  title: "Tennis",
                  url: "/#",
                },
                {
                  id: 7,
                  title: "Nikelab",
                  url: "/#",
                },
                {
                  id: 8,
                  title: "Training & Gym",
                  url: "/#",
                },
                {
                  id: 9,
                  title: "Football",
                  url: "/#",
                },
                {
                  id: 10,
                  title: "Baseball",
                  url: "/#",
                },
                {
                  id: 11,
                  title: "Nike Sportswear",
                  url: "/#",
                },
                {
                  id: 12,
                  title: "ACG",
                  url: "/#",
                },
                {
                  id: 13,
                  title: "Skateboarding",
                  url: "/#",
                },

                {
                  id: 14,
                  title: "Lacrosse",
                  url: "/#",
                },
                {
                  id: 15,
                  title: "Fan Gear",
                  url: "/#",
                },
                {
                  id: 16,
                  title: "Nike Flyease",
                  url: "/#",
                },
              ],
            },
          ],
        },
        {
          id: 4,
          title: "Kids",
          url: "/kids",
          subCategory: [
            {
              id: 1,
              title: "New & Featured",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "New Releases",
                  url: "/#",
                },
                {
                  id: 2,
                  title: "Best Sellers",
                  url: "/#",
                },
                {
                  id: 3,
                  title: "Best of Air Force ",
                  url: "/#",
                },
                {
                  id: 4,
                  title: "Shorts, Tees & Kicks",
                  url: "/#",
                },
                {
                  id: 5,
                  title: "florals & Logos",
                  url: "/#",
                },
                {
                  id: 6,
                  title: "Red, White & Blue",
                  url: "/#",
                },
                {
                  id: 7,
                  title: "Nike x Space Jam",
                  url: "/#",
                },
                {
                  id: 8,
                  title: "Lil Bugs Collection",
                  url: "/#",
                },
                {
                  id: 9,
                  title: "Sale",
                  url: "/#",
                },
              ],
            },
            {
              id: 2,
              title: "Boys Shoes",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "Big Kids",
                  url: "/#",
                },
                {
                  id: 2,
                  title: "Little Kids",
                  url: "/#",
                },
                {
                  id: 3,
                  title: "Baby & Toddlers",
                  url: "/#",
                },
                {
                  id: 4,
                  title: "Lifestyle",
                  url: "/#",
                },
                {
                  id: 5,
                  title: "Running",
                  url: "/#",
                },
                {
                  id: 6,
                  title: "Basketball",
                  url: "/#",
                },
                {
                  id: 7,
                  title: "Soccer",
                  url: "/#",
                },
                {
                  id: 8,
                  title: "Nike Flyease",
                  url: "/#",
                },
                {
                  id: 9,
                  title: "Sandals & Sliders",
                  url: "/#",
                },
                {
                  id: 10,
                  title: "Shoes $100 & Under",
                  url: "/#",
                },
                {
                  id: 11,
                  title: "All Shoes",
                  url: "/#",
                },
              ],
            },
            {
              id: 3,
              title: "Girls Shoes",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "Big Kids",
                  url: "/#",
                },
                {
                  id: 2,
                  title: "Little Kids",
                  url: "/#",
                },
                {
                  id: 3,
                  title: "Baby & Toddlers",
                  url: "/#",
                },
                {
                  id: 4,
                  title: "Lifestyle",
                  url: "/#",
                },
                {
                  id: 5,
                  title: "Running",
                  url: "/#",
                },
                {
                  id: 6,
                  title: "Basketball",
                  url: "/#",
                },
                {
                  id: 7,
                  title: "Soccer",
                  url: "/#",
                },
                {
                  id: 8,
                  title: "Nike Flyease",
                  url: "/#",
                },
                {
                  id: 9,
                  title: "Sandals & Sliders",
                  url: "/#",
                },
                {
                  id: 10,
                  title: "Shoes $100 & Under",
                  url: "/#",
                },
                {
                  id: 11,
                  title: "All Shoes",
                  url: "/#",
                },
              ],
            },
            {
              id: 4,
              title: "Boys Clothing",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "Big Kids",
                  url: "/#",
                },
                {
                  id: 2,
                  title: "Little Kids",
                  url: "/#",
                },
                {
                  id: 3,
                  title: "Baby & Toddlers",
                  url: "/#",
                },
                {
                  id: 4,
                  title: "Hoodies & Sweatshirts",
                  url: "/#",
                },
                {
                  id: 5,
                  title: "Pants & Tights",
                  url: "/#",
                },
                {
                  id: 6,
                  title: "Matching Sets",
                  url: "/#",
                },
                {
                  id: 7,
                  title: "Jackets",
                  url: "/#",
                },
                {
                  id: 8,
                  title: "tops & T-shirt",
                  url: "/#",
                },
                {
                  id: 9,
                  title: "Nike Pro & Baselayer",
                  url: "/#",
                },
                {
                  id: 10,
                  title: "Shorts",
                  url: "/#",
                },
                {
                  id: 11,
                  title: "Swimwear",
                  url: "/#",
                },
                {
                  id: 12,
                  title: "Extended Sizes",
                  url: "/#",
                },
                {
                  id: 13,
                  title: "All clothing ",
                  url: "/#",
                },
              ],
            },
            {
              id: 5,
              title: "Girls Clothing",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "Big Kids",
                  url: "/#",
                },
                {
                  id: 2,
                  title: "Little Kids",
                  url: "/#",
                },
                {
                  id: 3,
                  title: "Baby & Toddlers",
                  url: "/#",
                },
                {
                  id: 4,
                  title: "Hoodies & Sweatshirts",
                  url: "/#",
                },
                {
                  id: 5,
                  title: "Pants & Tights",
                  url: "/#",
                },
                {
                  id: 6,
                  title: "Matching Sets",
                  url: "/#",
                },
                {
                  id: 7,
                  title: "Jackets",
                  url: "/#",
                },
                {
                  id: 8,
                  title: "tops & T-shirt",
                  url: "/#",
                },
                {
                  id: 9,
                  title: "Nike Pro & Baselayer",
                  url: "/#",
                },
                {
                  id: 10,
                  title: "Shorts",
                  url: "/#",
                },
                {
                  id: 11,
                  title: "Swimwear",
                  url: "/#",
                },
                {
                  id: 12,
                  title: "Skirts & Dresses",
                  url: "/#",
                },
                {
                  id: 13,
                  title: "Extended Sizes",
                  url: "/#",
                },
                {
                  id: 14,
                  title: "All clothing ",
                  url: "/#",
                },
              ],
            },
            {
              id: 6,
              title: "Baby & Toddler",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "Baby Girl",
                  url: "/#",
                },
                {
                  id: 2,
                  title: "Baby Boy",
                  url: "/#",
                },
                {
                  id: 3,
                  title: "All Clothing",
                  url: "/#",
                },
                {
                  id: 4,
                  title: "All Shoes",
                  url: "/#",
                },
                {
                  id: 5,
                  title: "Baby & Toddler Sets",
                  url: "/#",
                },
              ],
            },
            {
              id: 7,
              title: "Accessories & Equipment",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "Bags & BagPacks ",
                  url: "/#",
                },
                {
                  id: 2,
                  title: "Hats",
                  url: "/#",
                },
                {
                  id: 3,
                  title: "Socks",
                  url: "/#",
                },
              ],
            },
          ],
        },
        {
          id: 5,
          title: "Customize",
          url: "/custom",
          subCategory: [
            {
              id: 1,
              title: "New & Featured",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "Customize with Nike By You",
                  url: "/#",
                },
                {
                  id: 2,
                  title: "Nike By You New Release",
                  url: "/#",
                },
                {
                  id: 3,
                  title: "Blazer By You",
                  url: "/#",
                },
                {
                  id: 4,
                  title: "Airmax By You",
                  url: "/#",
                },
                {
                  id: 5,
                  title: "Pegasus By You",
                  url: "/#",
                },
                {
                  id: 6,
                  title: "Airforce By You",
                  url: "/#",
                },
              ],
            },
            {
              id: 2,
              title: "Mens",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "Basketball",
                  url: "/#",
                },
                {
                  id: 2,
                  title: "Lifestyle",
                  url: "/#",
                },
                {
                  id: 3,
                  title: "Running",
                  url: "/#",
                },
                {
                  id: 4,
                  title: "Fottball",
                  url: "/#",
                },
                {
                  id: 5,
                  title: "Training & Gym",
                  url: "/#",
                },
                {
                  id: 6,
                  title: "Soccer",
                  url: "/#",
                },
                {
                  id: 7,
                  title: "Baseball",
                  url: "/#",
                },
                {
                  id: 8,
                  title: "Skateboarding",
                  url: "/#",
                },
              ],
            },
            {
              id: 3,
              title: "Womens",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "Basketball",
                  url: "/#",
                },
                {
                  id: 2,
                  title: "Lifestyle",
                  url: "/#",
                },
                {
                  id: 3,
                  title: "Running",
                  url: "/#",
                },
                {
                  id: 4,
                  title: "Softball",
                  url: "/#",
                },
                {
                  id: 5,
                  title: "Training & Gym",
                  url: "/#",
                },
                {
                  id: 6,
                  title: "Soccer",
                  url: "/#",
                },
                {
                  id: 7,
                  title: "Skateboarding",
                  url: "/#",
                },
              ],
            },
          ],
        },
        {
          id: 6,
          title: "Sale",
          url: "/sale",
          subCategory: [
            {
              id: 1,
              title: "Sale",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "Sale Upto 40% Off",
                  url: "/#",
                },
              ],
            },
            {
              id: 2,
              title: "Mens Sale",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "Shoes",
                  url: "/#",
                },
                {
                  id: 2,
                  title: "Clothing",
                  url: "/#",
                },
                {
                  id: 3,
                  title: "Equipment",
                  url: "/#",
                },
              ],
            },
            {
              id: 3,
              title: "Womens Sale",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "Shoes",
                  url: "/#",
                },
                {
                  id: 2,
                  title: "Clothing",
                  url: "/#",
                },
                {
                  id: 3,
                  title: "Equipment",
                  url: "/#",
                },
              ],
            },
            {
              id: 4,
              title: "Kids Sale",
              url: "/#",
              subsubCategory: [
                {
                  id: 1,
                  title: "Shoes",
                  url: "/#",
                },
                {
                  id: 2,
                  title: "Clothing",
                  url: "/#",
                },
                {
                  id: 3,
                  title: "Equipment",
                  url: "/#",
                },
              ],
            },
          ],
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
            {this.state.catagories.map((category) => (
              <Pane className="subnav">
                <Tab className="top-navbar" key={category.id} is="a" href="#">
                  {category.title}
                </Tab>
                <Pane className="subnav-content">
                  {category.subCategory.map((subLink) => (
                    <Pane className="column">
                      <Tab
                        className="common-subcategory"
                        key={subLink.id}
                        is="a"
                        href={subLink.url}
                      >
                        {subLink.title}
                      </Tab>
                      {subLink.subsubCategory.map((subsubLink) => (
                        <Tab 
                        className="common-sub-subcategory"
                        key={subsubLink.id} 
                        is="a" 
                        href={subsubLink.url}>
                          {subsubLink.title}
                        </Tab>
                      ))}
                    </Pane>
                  ))}
                </Pane>
              </Pane>
            ))}
          </TabNavigation>
        </Pane>

        {/*Seachbar, bookmarkbtn, cartbtn*/}
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

export default Topnavbar;
