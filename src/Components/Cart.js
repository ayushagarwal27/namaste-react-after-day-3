import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../store/cartSlice';
import { IMG_URL } from '../config';

const Cart = () => {
  const cartItems = useSelector(store => store.cart.items);
  const dispatch = useDispatch();

  function removeFromCart(itemId) {
    dispatch(removeItem(itemId));
  }

  function clearCartItems() {
    dispatch(clearCart());
  }
  return (
    <div className='text-center'>
      <div className=' flex flex-wrap m-16 justify-center'>
        {cartItems.map(item => (
          <div
            key={item.id}
            className='p-1 m-2 border border-black w-64 flex flex-col text-center'
          >
            <img src={IMG_URL + '/' + item.cloudinaryImageId} alt={item.name} />
            <p className='text-xl my-auto'>{item.name}</p>
            <button
              onClick={() => removeFromCart(item.id)}
              className='bg-red-800 hover:bg-red-700 p-2 mt-auto text-lime-50 rounded'
            >
              Remove from cart
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          if (cartItems.length === 0) return;
          clearCartItems();
        }}
        disabled={cartItems.length === 0}
        className='mx-auto bg-red-500 px-3 py-2 hover:bg-red-600 disabled:bg-gray-500 disabled:cursor-no-drop text-lime-50'
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
