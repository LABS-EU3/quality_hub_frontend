import axios from 'axios';

export default function axiosWithAuth() {
  const token = localStorage.getItem('token');

  const axiosInstance = axios.create({
    baseURL: 'https://dev-coach-production.herokuapp.com',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });

  return axiosInstance;
}
