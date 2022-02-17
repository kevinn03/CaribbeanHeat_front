import axios from 'axios';
const baseUrl = '/api/items';

const getItems = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};
const getItem = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

export default { getItems, getItem };
