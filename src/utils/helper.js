export function filterData(searchInput, allRestaurants) {
  const filterData = allRestaurants?.filter((restaurant) =>
    (restaurant?.data?.name).toLowerCase().includes(searchInput.toLowerCase())
  );
  console.log(filterData, "alankar mundkar");
  return filterData;
}
