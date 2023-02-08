import { useParams } from 'react-router-dom';
import { IMG_URL } from '../config';
import Shimmer from './Body/Shimmer';
import useRestaurantDetail from '../hooks/useRestaurantDetail';
import { useContext } from 'react';
import TitleContext from '../context/TitleContext';

const RestaurantDetail = () => {
  const { id } = useParams();
  const restaurantDetail = useRestaurantDetail(id);
  const {title} = useContext(TitleContext);

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
            <p key={item.id} className='text-xl'>
              - {item.name}
              <br />
            </p>
          ))}
      </div>
      <span className='text-gray-400 mt-2'>{title}</span>
    </div>
  );
};

export default RestaurantDetail;
