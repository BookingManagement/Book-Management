import api from "./api";

// Books
export const getBooks = async () => {
  const response = await api.get("/master/books");
  return response.data;
};

// Shops
export const getShops = async () => {
  const response = await api.get("/master/shops");
  return response.data;
};

// Agents
export const getAgents = async () => {
  const response = await api.get("/master/agents");
  return response.data;
};
