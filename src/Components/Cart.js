import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../store/cartSlice';
import { IMG_URL } from '../config';

const Cart = () => {
  const cartItems = useSelector(store => store.cart.items);
  const dispatch = useDispatch();

  function removeFromCart() {
    dispatch(removeItem());
  }
  return (
    <div className=' flex flex-wrap m-16 justify-center'>
      {cartItems.map(item => (
        <div
          key={item.id}
          className='p-1 m-2 border border-black w-64 flex flex-col text-center'
        >
          <img src={IMG_URL + '/' + item.cloudinaryImageId} alt={item.name} />
          <p className='text-xl my-auto'>{item.name}</p>
          <button
            onClick={() => removeFromCart()}
            className='bg-red-800 hover:bg-red-700 p-2 mt-auto text-lime-50 rounded'
          >
            Remove from cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
