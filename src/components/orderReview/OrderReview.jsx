import { Link } from "react-router-dom";
import { StorageProducts, UseProducts } from "../customHooks/CustomHook";
import Orderproduct from "../orderProduct/OrderProduct";
import ProductSummery from "../productSummery/ProductSummery";
import { deleteStorage } from "../storagei/Storage";
import "./OrderReview.css";
const Orderreview = () => {
  const [products, setProducts] = UseProducts();
  const [clickProduct, setClickProduct] = StorageProducts(products);
  console.log(clickProduct);
  const deleteProduct = (d) => {
    const restProducts = products.filter((product) => product._id !== d._id);
    setProducts(restProducts);
    deleteStorage(d._id);
  };
  return (
    <div className="products">
      <div className="order-review-container">
        {clickProduct.map((product) => (
          <Orderproduct
            key={product.id}
            product={product}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
      <ProductSummery products={clickProduct}>
        <Link to="/shipment" className="link">
          Proceed Checkout
        </Link>
      </ProductSummery>
    </div>
  );
};

export default Orderreview;
