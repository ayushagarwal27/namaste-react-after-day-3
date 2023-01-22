import RestaurantCard from './RestaurantCard';
import { data } from '../../config';
import { useState } from 'react';

const filterRestaurants = (restaurants, keyword) => {
  const filteredData = restaurants.filter(restaurant =>
    restaurant.info.name.includes(keyword),
  );
  return filteredData;
};

const RestaurantList = () => {
  const [searchText, setSearchText] = useState('');
  const [restaurantList, setRestaurantList] = useState(data);

  const filterData = (restaurants, keyword) => {
    const filteredData = filterRestaurants(restaurants, keyword);
    setRestaurantList(filteredData);
  };

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
            filterData(data, '');
          }
        }}
      />
      <button
        className='search-btn'
        onClick={() => filterData(restaurantList, searchText)}
      >
        Search
      </button>
      <div className='res-list'>
        {restaurantList.map(restaurant => (
          <RestaurantCard {...restaurant.info} key={restaurant.info.resId} />
        ))}
      </div>
    </>
  );
};

export default RestaurantList;
