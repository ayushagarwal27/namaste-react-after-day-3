import { useState } from 'react';
import { useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { SWIGGY_GET_ALL_RESTAURANTS } from '../../config';
import { Link } from 'react-router-dom';

const filterRestaurants = (restaurants, keyword) => {
  const filteredData = restaurants.filter(restaurant =>
    restaurant?.data?.name?.toLowerCase().includes(keyword.toLowerCase()),
  );
  return filteredData;
};

const RestaurantList = () => {
  const [searchText, setSearchText] = useState('');
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurantList();
  }, []);

  const getRestaurantList = async () => {
    try {
      const res = await fetch(SWIGGY_GET_ALL_RESTAURANTS);
      const data = await res.json();
      const cards = data?.data?.cards[2].data?.data?.cards;
      setRestaurantList(cards);
      setFilteredRestaurants(cards);
    } catch (err) {
      console.log(err);
    }
  };

  const filterData = (restaurants, keyword) => {
    const filteredData = filterRestaurants(restaurants, keyword);
    setFilteredRestaurants(filteredData);
  };

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <input
        type='text'
        placeholder='search item'
        className='search-bar'
        value={searchText}
        onChange={e => {
          setSearchText(e.target.value);
          if (e.target.value === '') {
            filterData(restaurantList, '');
          }
        }}
      />
      <button
        className='search-btn'
        onClick={() => filterData(filteredRestaurants, searchText)}
      >
        Search
      </button>
      <div className='res-list'>
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
