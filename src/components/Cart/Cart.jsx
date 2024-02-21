import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";

const Cart = () => {
  const Navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [flag, setflag] = useState(true)
  const [order,setOrderPlaced]=useState([])
  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("cartItems"))
    let cost = 0;
    for (let i = 0; i < arr.length; i++) {
      cost = cost + Number(arr[i].price * arr[i].quantity);
    }
    setCartItems(arr)
    if (arr.length == 0) {
      setflag(false)
    }
    setTotalPrice(cost);
    if(!arr.length<=0){
    const oder=localStorage.setItem('orderPlaced',JSON.stringify(arr))
    setOrderPlaced(oder)
    }
  }, []);

  const removeFromCart = (index) => {
    let arr = JSON.parse(localStorage.getItem("cartItems"))
    let arr1 = []

    for (let i = 0; i < arr.length; i++) {
      if (i != index) {
        arr1.push(arr[i])
      }
    }
    localStorage.setItem("cartItems", JSON.stringify(arr1));
    setCartItems(arr);
    HandaleChange();

  }

  const HandaleChange = () => {
    let arr = JSON.parse(localStorage.getItem("cartItems"));
    let price = 0;
    for (let i = 0; i < arr.length; i++) {
      price = price + arr[i].price * arr[i].quantity;
      console.log(price);
    }
    setTotalPrice(arr.length === 0 ? 0 : price);
    localStorage.setItem("cartItems", JSON.stringify(arr));
    setCartItems(arr);
    if (arr.length == 0) {
      setflag(false)
    }

  };

  function increaseQuantity(index) {
    let arr = JSON.parse(localStorage.getItem("cartItems"));
    for (let i = 0; i < arr.length; i++) {
      if (i == index) {
        arr[i].quantity = arr[i].quantity + 1;
      }
    }
    localStorage.setItem("cartItems", JSON.stringify(arr));
    setCartItems(arr);
    HandaleChange();
  }

  function decreaseQuantity(index) {
    let arr = JSON.parse(localStorage.getItem("cartItems"));
    for (let i = 0; i < arr.length; i++) {
      if (i == index && arr[i].quantity > 1) {
        arr[i].quantity = arr[i].quantity - 1;
      }
    }
    localStorage.setItem("cartItems", JSON.stringify(arr));
    setCartItems(arr);
    HandaleChange();
  }

  const buynow = () => {
    let arr = JSON.parse(localStorage.getItem("cartItems"));
    let arr1=JSON.parse(localStorage.getItem('orderPlaced'))
    let arr2=[...arr,...arr1];
     localStorage.setItem('orderPlaced', JSON.stringify(arr2))
    localStorage.setItem('cartItems', JSON.stringify([]));
    setCartItems([]);
      Navigate('/buy');
    }
  

  return (
    <div className="container mx-auto p-8">
      <div className="bg-slate-400 p-5 text-black flex justify-between">
        <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>
        <h1 className="text-2xl font-bold">Total Price:{totalPrice}</h1>
      </div>
      <div className="">
        <div className="flex flex-col ">
          {cartItems.map((item, index) => (
            <div key={index} className="border p-4 mt-5">
              <img
                className="w-full max-w-36 h-full max-h-screen"
                src={item.imageUrl}
              />
              <p className="text-lg font-bold">{item.name}</p>
              <p className="text-gray-600"> ₹{item.price}</p>

              <div className="flex items-center my-2">
                <button
                  onClick={() => decreaseQuantity(index)}
                  className="px-2 py-1 bg-red-500 text-white mr-2"
                >
                  -
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(index)}
                  className="px-2 py-1 bg-green-500 text-white ml-2"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(index)}
                className="mt-2 bg-red-500 text-white px-3 py-1"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gray-100 p-4 mb-16">
          <h2 className="text-xl font-bold mb-4">Price Details</h2>
          <div className="flex justify-between">
            <p>Total Items:</p>
            <p>{cartItems.length}</p>
          </div>
          <div className="flex justify-between">
            <p>Total Price:</p>
            <p>₹{totalPrice}</p>
          </div>
        </div>
      </div>
      <div className="fixed flex justify-between bottom-0 left-0 w-full bg-gray-100 p-4">
        <button
          onClick={() => Navigate("/")}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Continue Shopping
        </button>
        {
          flag && (
            <button
              onClick={buynow}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Buy Now
            </button>
          )}
      </div>
    </div>
  );
};

export default Cart;
