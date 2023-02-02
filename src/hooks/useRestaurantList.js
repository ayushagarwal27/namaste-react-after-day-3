import { useEffect, useState } from 'react';
import { SWIGGY_GET_ALL_RESTAURANTS } from '../config';

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  useEffect(() => {
    getRestaurantList();
  }, []);

  const getRestaurantList = async () => {
    try {
      const res = await fetch(SWIGGY_GET_ALL_RESTAURANTS);
      const data = await res.json();
      const cards = data?.data?.cards[2].data?.data?.cards;
      setRestaurantList(cards);
    } catch (err) {
      console.log(err);
    }
  };

  return restaurantList;
};

export default useRestaurantList;
