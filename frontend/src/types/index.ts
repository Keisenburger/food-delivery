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

export type NewFood = {
  foodName: String;
  price: String;
  image: String;
  ingredients: String;
  categoryId: String;
};

export type Category = {
  _id: String;
  categoryName: String;
};

export type Order = {
  _id: String;
  createdAt: String;
  totalPrice: String;
  status: String;
  user: User;
  foodOrderItems: foodOrderItem[];
};

export type User = {
  _id: String;
  email: String;
  address: String;
  phoneNumber: Number;
  password: String;
  role: String;
};

export type foodOrderItem = {
  _id: String;
  food: Food;
  quantity: Number;
};
