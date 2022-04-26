const setStorage = (id) => {
  const shoppingCart = localStorage.getItem("shopping-cart");
  let cartObj = {};
  if (shoppingCart) {
    cartObj = JSON.parse(shoppingCart);
  }

  let quantity = cartObj[id];
  if (quantity) {
    quantity = quantity + 1;
  } else {
    quantity = 1;
  }
  cartObj[id] = quantity;
  localStorage.setItem("shopping-cart", JSON.stringify(cartObj));
};

const getStorage = () => {
  const shoppingCart = localStorage.getItem("shopping-cart");
  let cartObj = {};
  if (shoppingCart) {
    cartObj = JSON.parse(shoppingCart);
  }

  return cartObj;
};

const deleteStorage = (id) => {
  const shoppingCart = localStorage.getItem("shopping-cart");
  let cartObj = {};
  if (shoppingCart) {
    cartObj = JSON.parse(shoppingCart);
    if (cartObj[id]) {
      delete cartObj[id];
      localStorage.setItem("shopping-cart", JSON.stringify(cartObj));
    }
  }
};
export { setStorage, getStorage, deleteStorage };
