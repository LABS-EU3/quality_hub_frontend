import axios from 'axios';

export default function axiosWithAuth() {
  const token =
    localStorage.getItem('token') || localStorage.getItem('tempuser');
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  });

  return axiosInstance;
}
