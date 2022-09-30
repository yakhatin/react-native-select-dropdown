export const deepSearchInArr = (query, arr) => {
  return arr.filter(el => JSON.stringify(el).includes(query));
};
