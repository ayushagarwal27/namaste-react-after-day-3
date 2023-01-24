import RestaurantCard from './RestaurantCard';
import { useState } from 'react';
import { useEffect } from 'react';

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
    const res = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING',
    );
    const data = await res.json();
    const cards = data?.data?.cards[2].data?.data?.cards;
    setRestaurantList(cards);
    setFilteredRestaurants(cards);
  };

  const filterData = (restaurants, keyword) => {
    const filteredData = filterRestaurants(restaurants, keyword);
    setFilteredRestaurants(filteredData);
  };

  if (restaurantList.length === 0) {
    return <p>Loading...</p>;
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
            <RestaurantCard
              {...restaurant?.data}
              key={restaurant?.data?.uuid}
            />
          ))
        ) : (
          <p>No restaurant with search text found</p>
        )}
      </div>
    </>
  );
};

export default RestaurantList;
