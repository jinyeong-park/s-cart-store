import axios from 'axios';

const instance = axios.create({
  // api url
  baseURL: '...'
})


export default instance;