import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: {
    Authorization: {
      toString() {
        return sessionStorage.getItem('token')
      }
    }
  }
})

export const httpLogin = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 1000
});