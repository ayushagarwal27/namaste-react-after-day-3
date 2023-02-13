import { useParams } from 'react-router-dom';
import { IMG_URL } from '../config';
import Shimmer from './Body/Shimmer';
import useRestaurantDetail from '../hooks/useRestaurantDetail';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../store/cartSlice';

const RestaurantDetail = () => {
  const { id } = useParams();
  const restaurantDetail = useRestaurantDetail(id);
  const dispatch = useDispatch();
  const cartItems = useSelector(store => store.cart.items);

  function addToCart(item) {
    dispatch(addItem(item));
  }

  function alreadyAddedToCart(items, id) {
    return items.find(el => el.id === id);
  }

  if (!restaurantDetail) {
    return <Shimmer />;
  }

  return (
    <div className='flex justify-evenly mt-16'>
      <div>
        <h2 className='text-4xl font-bold'>{restaurantDetail.name}</h2>
        <div>
          <img
            src={IMG_URL + '/' + restaurantDetail.cloudinaryImageId}
            alt={restaurantDetail.name}
          />
        </div>
        <p>{restaurantDetail.cuisines.join(', ')}</p>
        <p>{restaurantDetail.avgRatingString} stars</p>
      </div>
      <div className='shadow-md p-5 bg-yellow-100'>
        <h3 className='text-2xl'>Menu Items</h3>
        {Object.values(restaurantDetail?.menu?.items)
          .slice(0, 15)
          .map(item => (
            <div key={item.id} className='flex justify-between items-center'>
              <p className='text-xl'>- {item.name}</p>
              <button
                onClick={() => {
                  if (alreadyAddedToCart(cartItems, item.id)) {
                    return;
                  }
                  addToCart(item);
                }}
                disabled={alreadyAddedToCart(cartItems, item.id)}
                className='p-2 bg-orange-700 text-yellow-100 m-2 rounded-lg hover:bg-orange-600 disabled:cursor-no-drop disabled:bg-gray-500'
              >
                {alreadyAddedToCart(cartItems, item.id)
                  ? 'Added to Cart'
                  : 'Add to cart'}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RestaurantDetail;
