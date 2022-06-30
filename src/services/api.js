const BASE_URL = "https://food-delivery-2022.herokuapp.com";

export const mainFetch = async (url = "") => {
  const response = await fetch(url);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
};

export const getShops = async () => {
  const { data } = await mainFetch(`${BASE_URL}/api/shops`);
  return data;
};

export const getOneShop = async (id) => {
  const { data } = await mainFetch(`${BASE_URL}/api/shops/${id}`);
  return data;
};

export const getProduct = async (id) => {
  const { data } = await mainFetch(`${BASE_URL}/api/shops/shop/${id}`);
  return data;
};

export const addOrder = async (data) => {
  const newOrder = await mainFetch(`${BASE_URL}/api/orders/order`, {
    method: "post",
    body: data,
  });
  console.log(newOrder);
  return newOrder;
};
