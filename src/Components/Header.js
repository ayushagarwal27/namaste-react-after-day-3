import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import TitleContext from '../context/TitleContext';
import { useSelector } from 'react-redux';

export const Title = () => {
  const { title } = useContext(TitleContext);
  return (
    <div className='ml-3'>
      <Link to='/'>
        <span className='font-bold text-2xl'>{title}</span>
      </Link>
    </div>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const cartItems = useSelector(store => store.cart.items);
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
        <div className='w-10 h-8 -mb-2 ml-3'>
          <Link to='/cart' className='flex mr-2'>
            <img
              src='https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png'
              alt='cart'
            />{' '}
            <span className='text-md mx-2 bg-orange-600 p-2 text-lime-50 text-center -mt-2  rounded-full'>
              {cartItems.length}
            </span>
          </Link>
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
