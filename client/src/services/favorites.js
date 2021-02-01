import api from './apiConfig';

export const getFavorites = async (id) => {
  const resp = await api.get(`/users/${id}`)
  return resp.data
}