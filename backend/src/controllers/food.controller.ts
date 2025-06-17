export const getAllFoods = (req, res) => {
  res.send("food/ GET request irle");
};

export const getFoodById = (req, res) => {
  res.send("food/foodId GET requst irle");
};

export const createFood = (req, res) => {
  res.send("food/ POST request irle");
};

export const updateFood = (req, res) => {
  res.send("food/foodId PATCH request irle");
};

export const deleteFood = (req, res) => {
  res.send("food/foodId DELETE requst irle");
};
