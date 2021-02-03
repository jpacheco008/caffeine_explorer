import api from "./apiConfig";

export const getAllCoffees = async () => {
  const resp = await api.get("/coffees");
  return resp.data;
};

export const postCoffee = async (coffeeData) => {
  const resp = await api.post("/coffees", { coffee: coffeeData });
  return resp.data;
};

export const putCoffee = async (id, coffeeData) => {
  const resp = await api.put(`/coffees/${id}`, { coffee: coffeeData });
  return resp.data;
};

export const getOneCoffee = async (id) => {
  const resp = await api.get(`/coffees/${id}`);
  return resp.data;
};
