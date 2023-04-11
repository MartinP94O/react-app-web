import { requestFactory } from "./requester";

const baseUrl = "http://localhost:3030/data/items";

export const itemServiceFactory = (token) => {
  const request = requestFactory(token);

  const getAll = async () => {
    const result = await request.get(baseUrl);
    const items = Object.values(result);

    return items;
  };

  const getOne = async (itemId) => {
    const result = await request.get(`${baseUrl}/${itemId}`);

    return result;
  };

  const create = async (itemData) => {
    const result = await request.post(baseUrl, itemData);

    return result;
  };

  const edit = (itemId, data) => request.put(`${baseUrl}/${itemId}`, data);


  const deleteItem = (itemId) => request.delete(`${baseUrl}/${itemId}`);

  return {
    getAll,
    getOne,
    create,
    edit,
    delete: deleteItem,
  };
};
