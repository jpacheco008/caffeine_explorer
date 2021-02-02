import api from './apiConfig';

export const getFavorites = async (id) => {
  const resp = await api.get(`/users/${id}`)
  return resp.data
}
export const postFavorites = async (favoriteData) => {
  const resp = await api.post('/favorites', { favorite: favoriteData });
  return resp.data
}
export const deleteFavorites = async (id) => {
  const resp = await api.delete(`/favorites/${id}`)
  return resp
}