import { useEffect, useState } from "react";
import { getStorage } from "../storagei/Storage";

const UseProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return [products, setProducts];
};

const StorageProducts = () => {
  const [clickProduct, setClickProduct] = useState([]);

  useEffect(() => {
    const storageProducts = getStorage();
    const keys = Object.keys(storageProducts);
    const addedProducts = [];
    fetch("http://localhost:5000/productByKeys", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(keys),
    })
      .then((res) => res.json())
      .then((products) => {
        for (const id in storageProducts) {
          const product = products.find((p) => p._id === id);
          if (product) {
            const quantity = storageProducts[id];
            product.quantity = quantity;
            addedProducts.push(product);
          }
        }
        setClickProduct(addedProducts);
      });
  }, []);
  return [clickProduct, setClickProduct];
};

export { UseProducts, StorageProducts };
