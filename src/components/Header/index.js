import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="website-logo"
    />
    <div className="items-button-container">
      <ul className="list-items-container">
        <Link to="/" className="nav-list-item">
          <li>Home</li>
        </Link>
        <Link to="/products" className="nav-list-item">
          <li>Products</li>
        </Link>
        <Link to="/cart" className="nav-list-item">
          <li>Cart</li>
        </Link>
      </ul>
      <button type="button" className="logout-button">
        Logout
      </button>
    </div>
  </nav>
)

export default Header
