export const deepSearchInArr = (query = '', arr = []) => {
  return arr.filter(el => JSON.stringify(el).toLowerCase().includes(query.toLowerCase()));
};
