import React from 'react'
import '../header/header.css'
import { useState } from 'react';
import products from '../../Product.jsx/Products';
import { useNavigate } from 'react-router-dom';
function Header2() {
  const Navigate=useNavigate()
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleSearch = () => {
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setSearchQuery(inputValue);
        console.log(inputValue);

        const filtered = products.filter(product =>
            product.name.toLowerCase().startsWith(event.target.value.toLowerCase())
        );
        console.log(filtered);
        setFilteredProducts(filtered);
       };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
  

  return (
    <>
    <div className="header">
      <div className="logo"> Shivam Mart</div>
      <div className="search-bar">
        <input  type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress} />
      </div>
      <div className="user-actions">
       
        {localStorage.getItem('loggedIn') ?(
          <button className="login-button"><a className='Button_a' href="/profile">Profile</a></button>
        ):(
          <button className="login-button"><a className='Button_a' href="/login">Login</a></button>
          
        )
      }
      <div className="cart1">
          <a href="/addItems" id="cart1">Add...</a>
        </div>
      </div>

      <div className="c">
      {filteredProducts.map(product => (
                    <div key={product.id} className=" ">
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className=""
                        />
                        <p className="">{product.name}</p>
                        <button onClick={()=>Navigate('/product',{state:product})} > 
                View Details</button>
                    </div>
                ))}
      </div>

      </div>
    </>
  )
}

export default Header2
