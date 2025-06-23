export type Food = {
  _id: any;
  foodName: String;
  price: String;
  image: String;
  ingredients: String;
  category: {
    categoryName: String;
  };
};

export type Category = {
  _id: any;
  categoryName: String;
};
