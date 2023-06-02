export const getRandomNumber = (min, max) => {
  const distance = Math.abs(max - min);
  const randomDistance = Math.round(Math.random() * distance);
  return min + randomDistance;
};
