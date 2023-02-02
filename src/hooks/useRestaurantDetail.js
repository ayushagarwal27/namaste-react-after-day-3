import { useState, useEffect } from 'react';
import { SWIGGY_SINGLE_RESTAURANT } from '../config';

const useRestaurantDetail = id => {
  const [restaurantDetail, setRestaurantDetail] = useState('');
  useEffect(() => {
    const getRestaurantDetail = async () => {
      try {
        const res = await fetch(SWIGGY_SINGLE_RESTAURANT + id);
        const detail = await res.json();
        setRestaurantDetail(detail.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRestaurantDetail();
  }, [id]);

  return restaurantDetail;
};

export default useRestaurantDetail;
