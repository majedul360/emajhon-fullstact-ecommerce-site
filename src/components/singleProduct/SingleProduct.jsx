import "./SingleProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const SingleProduct = ({ product, addIteam }) => {
  const { name, price, img, seller, ratings } = product;

  return (
    <div className="single-product">
      <img src={img} alt="" />
      <div className="content">
        <h2>{name.slice(0, 20)}</h2>
        <h3>price: {price}</h3>
        <p>menufacturer: {seller}</p>
        <p>rating: {ratings} star</p>
      </div>
      <span onClick={() => addIteam(product)}>
        add to cart
        <FontAwesomeIcon className="icon" icon={faShoppingCart} />
      </span>
    </div>
  );
};

export default SingleProduct;
