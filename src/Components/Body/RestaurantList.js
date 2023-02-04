import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import { filterRestaurants } from '../../utils/helper';
import useRestaurantList from '../../hooks/useRestaurantList';
import { useEffect } from 'react';

const RestaurantList = () => {
  const [searchText, setSearchText] = useState('');
  const restaurantList = useRestaurantList();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const filterData = (restaurants, keyword) => {
    const filteredData = filterRestaurants(restaurants, keyword);
    setFilteredRestaurants(filteredData);
  };

  useEffect(() => {
    if (restaurantList.length > 0) {
      setFilteredRestaurants(restaurantList);
    }
  }, [restaurantList]);

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className='flex mt-4 mx-auto'>
        <input
          type='text'
          placeholder='search item'
          value={searchText}
          onChange={e => {
            setSearchText(e.target.value);
            if (e.target.value === '') {
              filterData(restaurantList, '');
            }
          }}
          className='w-64 p-1 outline outline-1 outline-yellow-600'
        />
        <button
          className='bg-yellow-600 py-3 px-4 text-white hover:bg-yellow-700 ml-3'
          onClick={() => filterData(filteredRestaurants, searchText)}
        >
          Search
        </button>
      </div>
      <div className='flex flex-wrap'>
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map(restaurant => (
            <Link
              to={`/restaurant/${restaurant?.data?.id}`}
              key={restaurant?.data?.uuid}
            >
              <RestaurantCard {...restaurant?.data} />
            </Link>
          ))
        ) : (
          <p>No restaurant with search text found</p>
        )}
      </div>
    </>
  );
};

export default RestaurantList;
