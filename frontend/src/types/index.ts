export type Food = {
  _id: String;
  foodName: String;
  price: String;
  image: String;
  ingredients: String;
  category: {
    categoryName: String;
  };
};

export type Category = {
  categoryName: String;
};
