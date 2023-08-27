export function filterData(searchInput, allRestaurants) {
  const filterData = allRestaurants?.filter((restaurant) =>
    (restaurant?.info?.name).toLowerCase().includes(searchInput.toLowerCase())
  );
  return filterData;
}
