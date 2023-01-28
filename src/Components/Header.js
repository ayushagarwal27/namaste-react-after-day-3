import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Title = () => {
  return (
    <div>
      <Link to='/'>
        <span className='logo'>Food Nation</span>
      </Link>
    </div>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  return (
    <header>
      <Title />
      <div className='side-items'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/contactUs'>Contact Us</Link>
            </li>
            <li>
              <Link to='/aboutUs'>About Us</Link>
            </li>
          </ul>
        </nav>
        <div className='cart'>
          <img
            src='https://png.pngtree.com/png-clipart/20191120/original/pngtree-shopping-cart-icon-png-image_5060874.jpg'
            alt='cart'
          />
        </div>

        <button
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
            if (!isLoggedIn) {
              navigate('/login');
            } else {
              navigate('/');
            }
          }}
          className='search-btn'
        >
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    </header>
  );
};

export default Header;
