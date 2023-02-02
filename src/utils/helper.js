export const filterRestaurants = (restaurants, keyword) => {
  const filteredData = restaurants.filter(restaurant =>
    restaurant?.data?.name?.toLowerCase().includes(keyword.toLowerCase()),
  );
  return filteredData;
};
