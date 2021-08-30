import { Pane } from "evergreen-ui";

function ProductSize(props) {
  const { sizes } = props;
  return (
    <Pane className="product-size">
      <Pane
        flex={1}
        alignItems="center"
        display="flex"
        justifyContent="space-between">
        <Pane>Select Size</Pane>
        <Pane>Size Guide</Pane>
      </Pane>
      <Pane className="size-container">
        {sizes.map((size) => (
          <div key={Math.random()} className="size-div">
            {size}
          </div>
        ))}
      </Pane>
    </Pane>
  );
}

export default ProductSize;
