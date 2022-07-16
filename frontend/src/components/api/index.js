import axios from 'axios'
const URL = 'https://nouven-auth.herokuapp.com/';
const request = {
  login: async (username, password) => {
    return axios.post(`${URL}v1/auth/login`, { username, password })
  },
  register: async (user) => {
    return axios.post(`${URL}v1/auth/register`, user)
  },
  getAllUser: (token) => {
    return axios.get(`${URL}user`, { headers: { token: `Bearer ${token}` } });
  }
}
export default request;
