import { Pane } from "evergreen-ui";

function ProductColor(props) {
  const { colors, getColorIndex } = props;

  const getIndex = (id) => {
    getColorIndex(id - 1);
  };

  return (
    <Pane className="product-color">
      {colors.map((clrs) => (
        <button
          key={Math.random()}
          className="image-button"
          onClick={getIndex.bind(this, clrs.id)}>
          <img
            src={
              require("../../pages/assets/images/products/" + clrs.img[0])
                ?.default
            }
            alt=""
          />
        </button>
      ))}
    </Pane>
  );
}

export default ProductColor;
