import React, { Component } from "react";
import {
  Pane,
  UnorderedList,
  ListItem,
  Button,
  CaretUpIcon,
  CaretDownIcon,
  PlusIcon,
  MinusIcon,
  Checkbox,
} from "evergreen-ui";
import "../../assets/css/products/productfilter.css";
import { FilterDataLinks } from "../../data/ProductFilterCategoryLinks";
import { FilterData } from "../../data/ProductFilterData";

export default class ProductNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subCategoryLinks: [...FilterDataLinks],
      productFilterData: [...FilterData]
    };
  }

  toggleVisibility(idValue, typeValue) {

    var index = this.state.productFilterData.findIndex((dataId) => dataId.id === idValue);
    const { productFilterData } = this.state;
    const copyData = [...productFilterData];

    if (typeValue === "filter") {
      copyData[index].toggleFilterVisibility = !copyData[index].toggleFilterVisibility;
      this.setState({
        productFilterData: copyData,
      });
    }

    else if (typeValue === "more") {
      copyData[index].isMoreClicked = !copyData[index].isMoreClicked;

      if (copyData[index].isMoreClicked === false) {
        copyData[index].morelessText = "More";
      }

      else if (copyData[index].isMoreClicked === true) {
        copyData[index].morelessText = "Less";
      }

      this.setState({
        productFilterData: copyData,
      });
    }
  }

  render() {
    const productnavclass = this.props.shownav
      ? "product-nav"
      : "product-nonav";

    return (
      <Pane className={productnavclass}>
        <Pane className="product-subcateogry-links">
          <UnorderedList className="subcategory-list-items">
            {this.state.subCategoryLinks.map((subCategory) => (
              <ListItem className="filter-list-items" key={subCategory.id}>
                <a className="filter-list-tags" href={subCategory.link}>
                  {subCategory.title}
                </a>
              </ListItem>
            ))}
          </UnorderedList>
        </Pane>

        {this.state.productFilterData.map((filterValue) => (
          <Pane className="filter-view" style={{marginBottom: "0px"}}>
            <Pane display="flex">
              <Button
                className="filter-visibility-btn"
                key={filterValue.id}
                onClick={this.toggleVisibility.bind(this, filterValue.id, "filter")}
                >
                {filterValue.title}
              </Button>
              <Button
                className="filter-icon-btn"
                key={filterValue.id}
                onClick={this.toggleVisibility.bind(this, filterValue.id, "filter")}
                iconAfter={
                  filterValue.toggleFilterVisibility === true
                    ? CaretUpIcon
                    : CaretDownIcon} 
              />
            </Pane>

            {filterValue.toggleFilterVisibility && (
              <Pane>
                {filterValue.hasMore === true && filterValue.isMoreClicked === true ?
                  <Pane>
                    {filterValue.checkboxValues.map((boxItems) => (
                      <Pane className="filter-checkbox">
                        <Checkbox
                          className="checkbox-items"
                          label={boxItems.title}
                          key={boxItems.id}
                        />
                      </Pane>
                    ))}
                  </Pane>
                : <Pane>
                    {filterValue.checkboxValues.slice(0, 4).map((boxItems) => (
                      <Pane className="filter-checkbox">
                        <Checkbox
                          className="checkbox-items"
                          label={boxItems.title}
                          key={boxItems.id}
                        />
                      </Pane>
                    ))}
                  </Pane>
                }

                {filterValue.hasMore && (
                  <Pane className="more-visibility-div">
                    <Button 
                      className="more-visibility-btn"
                      onClick={this.toggleVisibility.bind(this, filterValue.id, "more")} 
                      iconBefore={filterValue.isMoreClicked === true ? MinusIcon : PlusIcon}
                      >
                        {filterValue.morelessText}
                    </Button>
                  </Pane>
                )}
              </Pane>
            )}
          </Pane>
        ))}
      </Pane>
    );
  }
}
