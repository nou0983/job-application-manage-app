const addDataToLocalStorage = (type, payload) => {
  localStorage.setItem(type, JSON.stringify(payload));
};

const removeDataFromLocalStorage = (type) => {
  localStorage.removeItem(type);
};

const getDataFromLocalStorage = (type) => {
  const result = localStorage.getItem(type);
  return result ? JSON.parse(result) : type === "user" ? null : false;
};

export {
  addDataToLocalStorage,
  removeDataFromLocalStorage,
  getDataFromLocalStorage,
};
