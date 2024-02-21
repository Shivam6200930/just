import "../../App.css"
function Header() {
  return (
    <>
        <header className="header">
      <div className="logo"> Shivam Mart</div>
      <div className="search-bar">
        <input type="text" placeholder="Search products..." />
      </div>
      <div className="user-actions">
       
        {localStorage.getItem('loggedIn') ?(
          <button className="login-button"><a className='Button_a' href="/profile">Profile</a></button>
        ):(
          <button className="login-button"><a className='Button_a' href="/login">Login</a></button>
          
        )
      }
        <div className="cart">
          <a href="/cart" id="cart">🛒</a>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header
