import axios from 'axios';
console.log(sessionStorage.getItem('token'));
export const axiosInstance = axios.create({
    
    baseURL: 'http://localhost:3001/',
    timeout: 1000,
    headers: {'Authorization': sessionStorage.getItem('token')}
  });
  
export const axiosInstanceLogin = axios.create({
    baseURL: 'http://localhost:3001/',
    timeout: 1000
  });