import { Pane, UnorderedList, ListItem } from "evergreen-ui";
import "../../assets/css/productdetails/productdetails.css";

function ProductDescription(props) {
  const { description, color, colorIndex } = props;
  return (
    <Pane className="product-description">
      <Pane>{description}</Pane>
      <UnorderedList marginTop={20}>
        <ListItem color="black" fontSize={15}>
          Shown: {color[colorIndex].shown}
        </ListItem>
        <ListItem color="black" fontSize={15}>
          Style: {color[colorIndex].style}
        </ListItem>
      </UnorderedList>
      <a href="/#">View Product Details</a>
    </Pane>
  );
}

export default ProductDescription;
