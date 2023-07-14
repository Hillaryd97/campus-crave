import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import img4 from "../assets/img8.webp";
import { Link } from "react-router-dom";

const Cart = ({ setShow, cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  // const [checkout, showCheckout] = useState(false);

  // const handleCheck = () => {
  //   showCheckout(true);
  //   console.log(setShow)
  // };

  // const handleNotCheck = () => {
  //   showCheckout(false);
  // };
  

  const handleRemove = (id) => {
    const arr = cart.filter((meal) => meal.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart?.map((meal) => (ans += meal.amount * meal.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });
  return (
    <div className="overflow-auto fixed top-20 right-0 w-2/5 md:w-375 h-5/6 bg-white drop-shadow-md flex flex-col z-[101]">
      <div className="w-full bg-red-100 flex fixed  items-center justify-between px-4 py-2 cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }}>
          <button
            onClick={() => setShow(false)}
            className="text-gray-600 text-lg"
          >
            Back
          </button>
        </motion.div>
        <p className="text-gray-600 text-lg font-semibold">Cart</p>
        <div></div>
      </div>
      <div className="mt-[3.5rem]"></div>
      {cart?.map((meal) => (
        <div
          className="mb-2  mx-3 justify-center items-center bg-gray-100 shadow-md rounded-2xl"
          key={meal.id}
        >
          <div className="grid grid-cols-3">
            <div className="">
              <img
                src={img4}
                alt="/"
                className="lg:h-[5em] h-[4em] rounded-2xl"
              />
            </div>
            <div className="grid col-span-2 px-2 py-1">
              <h3 className="font-bold">{meal.title}</h3>
              <p className="text-xs text-gray-600">
                {meal.description.length > 90
                  ? `${meal.description.substring(0, 90)}...`
                  : meal.description}
              </p>
            </div>
          </div>
          <div className="flex space-x-3 px-2 text-xl items-center font-bold">
            <button
              onClick={() => handleChange(meal, +1)}
              className="text-orange-500 hover:scale-105"
            >
              +
            </button>
            <button className="text-base">{meal.amount}</button>
            <button
              onClick={() => handleChange(meal, -1)}
              className="text-orange-500 hover:scale-105"
            >
              -
            </button>
          </div>
          <div className="flex justify-between px-2 mb-2">
            <span>₦{meal.price}</span>
            <button
              onClick={() => handleRemove(meal.id)}
              className="bg-orange-600 text-sm text-white rounded-full px-2"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="flex justify-between mx-4 pt-2 border-t-2 border-gray-800">
        
        <div>
          Payment Type:{" "}
          <select className="bg-orange-100 border border-black rounded-lg px-2" name="" id="">
            <option value="Pay On Delivery">Pay On Delivery</option>
            <option value="Card">Card</option>
          </select>
        </div>
        <div>
          Location:{" "}
          <select className="bg-orange-100 border border-black rounded-lg px-2" name="" id="">
            <option value="New Hostel 1">New Girls Hostel 1</option>
            <option value="New Hostel 1">New Girls Hostel 2</option>
            <option value="Old Hostel">Old Girls Hostel</option>
            <option value="Old Hostel">Old Boys Hostel</option>
            <option value="Old Hostel">New Boys Hostel</option>
            <option value="Old Hostel">Portfolio Hostel</option>
          </select>
        </div>
      </div>
      <div className="px-4 py-2 w-full flex">Phone Number: <input type="text" className="ml-1 w-4/6 bg-orange-100 border border-black rounded-lg" /></div>
      <div className="px-4 text-lg font-bold text-center">
          <span>Total: </span>
          <span>₦{price}</span>
        </div>
      <Link to={'/checkout'} className="text-center bg-orange-600 mx-4 my-2 py-0.5 text-white rounded-full hover:bg-orange-500">
        Checkout
      </Link>
    </div>
  );
};

export default Cart;
