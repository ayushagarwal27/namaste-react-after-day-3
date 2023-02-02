import { useParams } from 'react-router-dom';
import { IMG_URL } from '../config';
import Shimmer from './Body/Shimmer';
import useRestaurantDetail from '../hooks/useRestaurantDetail';

const RestaurantDetail = () => {
  const { id } = useParams();
  const restaurantDetail = useRestaurantDetail(id);

  if (!restaurantDetail) {
    return <Shimmer />;
  }

  return (
    <div className='res-detail'>
      <div>
        <h2>{restaurantDetail.name}</h2>
        <div>
          <img
            src={IMG_URL + '/' + restaurantDetail.cloudinaryImageId}
            alt={restaurantDetail.name}
          />
        </div>
        <p>{restaurantDetail.cuisines.join(', ')}</p>
        <p>{restaurantDetail.avgRatingString} stars</p>
      </div>
      <div className='res-menu'>
        <h3>Menu Items</h3>
        {Object.values(restaurantDetail?.menu?.items)
          .slice(0, 15)
          .map(item => (
            <p key={item.id}>
              - {item.name}
              <br />
            </p>
          ))}
      </div>
    </div>
  );
};

export default RestaurantDetail;
