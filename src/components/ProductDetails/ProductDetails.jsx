import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function ProductDetails() {
  const Navigate=useNavigate()
  const { state } = useLocation()
  console.log(state)
  const cart=()=>{
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const isProductInCart = existingCartItems.some(item => item.name === state.name);

    if (!isProductInCart) {
      const updatedCartItems = [...existingCartItems, { name: state.name, imageUrl: state.imageUrl, price: state.price,quantity:state.quantity }];
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
    Navigate('/cart');

  }
  return (
    <>
      <div className="flex justify-center items-start p-4">
      <div className="fixed left-9 top-7">
        <div className='border-solid border-2 border-blue-400 p-8 max-h-screen  mt-8  ml-9'>
        <img
        src={state.imageUrl} className="w-full max-w-100 h-full max-h-100 p-1"
        />
        </div>
        <div className="flex mt-10 ml-8">
          <button onClick={cart}className="bg-green-500 border-solid border-2 border-green-600 hover:bg-green-600 text-white px-10 transition duration-700 ease-in-out  py-2 mr-2 rounded-lg">Add to Cart</button>
          <button onClick={()=>Navigate('/')}className="bg-blue-500 transition duration-700 ease-in-out border-solid border-2 border-blue-600 text-white px-10 py-2 rounded-lg hover:bg-blue-600">Home</button>
        </div>
      </div>

      {/* Product Details Column */}
      <div className="ml-72 mt-10">
        {/* Product Name */}
        <h1 className="text-2xl font-bold mb-2">{state.name}</h1>

        {/* Rating Box */}
        

        {/* Price */}
        <p className="text-4xl font-semibold mt-7 mb-5">Price: {state.price}</p>

        {/* Available Offers */}
        <p className="text-sm mb-2">Available Offers: 10% off with code </p>

        {/* Delivery Pincode Search Bar */}
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Enter Pincode"
            className="p-2 border border-gray-300 mr-2"
          />
          <button className="bg-blue-500 text-white px-5 py-2 rounded-lg">Search</button>
        </div>

        {/* Highlights */}
        <div className="bg-gray-100 p-4 mb-4">
          <p className="text-sm font-semibold mb-2">Highlights:</p>
          <ul className="list-disc ml-4">
            <li>Easy payment options</li>
            <li>Free shipping on orders above 1000</li>
            {/* Add more highlights as needed */}
          </ul>
        </div>

        {/* Description */}
        <div className="mb-4">
          <p className="text-sm font-semibold mb-2">Description:</p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nisl vel justo
            fringilla ullamcorper.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductDetails
