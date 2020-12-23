import axios from 'axios';

export const request = axios.create({
  // Should chnage to environment variable
  baseURL: 'https://ship-server-rczvh.run.goorm.io'
});