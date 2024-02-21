import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function OrderPlaced() {
    const Navigate=useNavigate()
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem('orderPlaced'));
    setOrder(arr);
  }, []);

  return (
    <>
      <div>
        {order.map((item, index) => (
          <div key={index} className="border p-4 mt-5">
            <img
              className="w-full max-w-36 h-full max-h-screen"
              src={item.imageUrl}
              alt={item.name} // Add an alt attribute for accessibility
            />
            <p className="text-lg font-bold">{item.name}</p>
            <p className="text-gray-600"> ₹{item.price}</p>
          </div>
        ))}
        
      </div>
      <div className="fixed flex justify-between bottom-0 left-0 w-full bg-gray-100 p-4">
        <button
          onClick={() => Navigate("/")}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Home Page
        </button>
        </div>
    </>
  );
}

export default OrderPlaced;
