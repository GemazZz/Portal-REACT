export const addLocalStorage = (key, item) => {
  const specialArr = JSON.parse(localStorage.getItem(key));
  specialArr.push(item);
  localStorage.setItem(key, JSON.stringify(specialArr));
};
