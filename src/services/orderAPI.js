import axios from 'axios';
const baseUrl = '/api/orders';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

const exportedObject = { getAll, create };
export default exportedObject;
