import axios from 'axios';

export const request = axios.create({
  // Should chnage to environment variable
  baseURL: 'https://shipcheck-server-vrxqx.run.goorm.io/'
});