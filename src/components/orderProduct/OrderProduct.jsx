import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./OrderProduct.css";

const Orderproduct = ({ product, deleteProduct }) => {
  const { price, shipping, name, img } = product;
  return (
    <div className="ordered-product">
      <img src={img} alt="" />
      <div className="content">
        <h3>{name.slice(0, 20)}</h3>
        <p>{price}</p>
        <p>{shipping}</p>
      </div>
      <FontAwesomeIcon
        onClick={() => deleteProduct(product)}
        className="icon"
        icon={faTrashCan}
      />
    </div>
  );
};

export default Orderproduct;
