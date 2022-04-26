import "./ProductSummery.css";
import { Link } from "react-router-dom";
const ProductSummery = (props) => {
  const { products } = props;
  let subTotal = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of products) {
    quantity = quantity + product.quantity;
    subTotal = subTotal + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = (subTotal * 20) / 100;
  const total = subTotal + shipping + tax;
  return (
    <div className="summery">
      <h3>order summary</h3>
      <p>selected items: {quantity}</p>
      <p>sub-total: ${subTotal} </p>
      <p>shipping: ${shipping}</p>
      <p>tax: ${tax}</p>
      <p>total: ${total}</p>
      {props.children}
    </div>
  );
};

export default ProductSummery;
