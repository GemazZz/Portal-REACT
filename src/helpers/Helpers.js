export const addLocalStorage = (key, item) => {
  const specialArr = JSON.parse(localStorage.getItem(key));
  specialArr.push(item);
  localStorage.setItem(key, JSON.stringify(specialArr));
};

export const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};
