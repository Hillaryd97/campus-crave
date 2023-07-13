export const fetchCaf = () => {
  const cafInfo =
    localStorage.getItem("cafItems") != "undefined"
      ? JSON.parse(localStorage.getItem("cafItems"))
      : localStorage.clear();

  return cafInfo ? cafInfo : [];
};

export const fetchCart = () => {
  const cartInfo =
    localStorage.getItem("cartItems") != "undefined"
      ? JSON.parse(localStorage.getItem("cartItems"))
      : localStorage.clear();

  return cartInfo ? cartInfo : [];
};
