import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Title = () => {
  return (
    <div>
      <Link to='/'>
        <span className='font-bold text-2xl'>Food Nation</span>
      </Link>
    </div>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  return (
    <header className='flex justify-between items-center bg-yellow-100 p-1'>
      <Title />
      <div className='flex items-center'>
        <nav>
          <ul className='flex items-center'>
            <li className='ml-3'>
              <Link to='/'>Home</Link>
            </li>
            <li className='ml-3'>
              <Link to='/contactUs'>Contact Us</Link>
            </li>
            <li className='ml-3'>
              <Link to='/aboutUs'>About Us</Link>
            </li>
          </ul>
        </nav>
        <div className='w-8 h-8 -mb-2 ml-3'>
          <img
            src='https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png'
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
          className='bg-yellow-800 rounded-lg px-4 py-3 text-yellow-50 hover:bg-yellow-700 ml-8 mr-1'
        >
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div> 
    </header>
  );
};

export default Header;
