import { Pane } from "evergreen-ui";
import "../../assets/css/productdetails/productdetails.css";

function ProductName(props) {
  const { name, type, price } = props;
  return (
    <Pane className="product-header">
      <Pane className="name-type">
        <p className="productdetails-type">{type}</p>
        <p className="productdetails-name">{name}</p>
      </Pane>
      <Pane>
        <p className="productdetails-price">${price}</p>
      </Pane>
    </Pane>
  );
}

export default ProductName;
