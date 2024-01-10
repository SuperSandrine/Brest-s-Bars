export const bestRates = (array) => {
  const copyArray = [...array];
  copyArray.sort((a, b) => Number(b.rating) - Number(a.rating));
  return copyArray;
};
