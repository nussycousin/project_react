function Generifileter(arr, search, filterBy) {
  // Determine if the search term is numerical
  const isNumeric = !isNaN(parseFloat(search)) && isFinite(search);
  const searchLower = search.toLowerCase();

  const list = arr.filter((item) => {
    if (filterBy === 'price' || filterBy === 'brand') {
      // For numerical search
      return item[filterBy] <= search; // Use '==' to handle both strings and numbers
    } else {
      // For string search
      return (
        item.instrument.toLowerCase().includes(searchLower) ||
        item.image_url.toLowerCase().includes(searchLower)  ||
       item.brand.toLowerCase().includes(searchLower)
      );
    }
  });

  return list;
}

export default Generifileter;