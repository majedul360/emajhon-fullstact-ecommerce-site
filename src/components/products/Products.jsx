import "./Products.css";
import SingleProduct from "../singleProduct/SingleProduct";
import ProductSummery from "../productSummery/ProductSummery";
import { setStorage } from "../storagei/Storage";
import { StorageProducts, UseProducts } from "../customHooks/CustomHook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faL } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [clickProduct, setClickProduct] = StorageProducts();
  const [page, setPage] = useState(0);
  const [btnClick, setBtnClick] = useState(0);
  const [prevBtnIsClick, setPrevBtnIsClick] = useState(false);
  const [nextBtnIsClick, setNextBtnIsClick] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:5000/products?btnNumber=${btnClick}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [btnClick]);

  useEffect(() => {
    fetch("http://localhost:5000/product-total")
      .then((res) => res.json())
      .then((number) => {
        const pages = Math.ceil(number.total / 10);
        setPage(pages);
      });
  }, []);
  const addIteam = (getProduct) => {
    const exist = clickProduct.find(
      (product) => product._id === getProduct._id
    );
    if (!exist) {
      getProduct.quantity = 1;

      setClickProduct([...clickProduct, getProduct]);
    } else {
      exist.quantity = exist.quantity + 1;
      const restProduct = clickProduct.filter(
        (product) => product._id !== getProduct._id
      );
      setClickProduct([...restProduct, exist]);
    }
    setStorage(getProduct._id);
  };

  const previousBtnHandler = () => {
    if (btnClick > 0) {
      setBtnClick(btnClick - 1);
      setPrevBtnIsClick(true);
      setNextBtnIsClick(false);
    }
  };

  const nextBtnHandler = () => {
    setBtnClick(btnClick + 1);
    setPrevBtnIsClick(false);
    setNextBtnIsClick(true);
  };

  return (
    <>
      <div className="products">
        <div className="product-container">
          {products.map((product) => {
            return (
              <SingleProduct
                key={product._id}
                product={product}
                addIteam={addIteam}
              />
            );
          })}
        </div>
        <ProductSummery products={clickProduct}>
          <Link to="/order-review" className="link">
            Review Order{" "}
            <FontAwesomeIcon icon={faArrowRight} className="icon" />
          </Link>
        </ProductSummery>
      </div>
      <div className="pagination">
        <button
          disabled={btnClick <= 0 && true}
          onClick={previousBtnHandler}
          className={`${prevBtnIsClick && "active"}`}
        >
          previous
        </button>
        {[...Array(page).keys()].map((number) => {
          return (
            <button
              onClick={() =>
                setBtnClick(
                  number,
                  setPrevBtnIsClick(false),
                  setNextBtnIsClick(false)
                )
              }
              className={number === btnClick ? "active" : ""}
              key={number}
            >
              {number + 1}
            </button>
          );
        })}
        <button
          disabled={btnClick >= page - 1 && true}
          onClick={nextBtnHandler}
          className={`${nextBtnIsClick && "active"}`}
        >
          next
        </button>
      </div>
    </>
  );
};

export default Products;

// setNextBtnIsClick(true),
// setPrevBtnIsClick(false)
