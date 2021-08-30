import { Pane } from "evergreen-ui";

function ImageGallery(props) {
  const { images } = props;
  return (
    <Pane className="img-holder">
      <img
        className="product-img"
        src={require("../../pages/assets/images/products/" + images)?.default}
        alt=""
      />
    </Pane>
  );
}

export default ImageGallery;
