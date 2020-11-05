import axios from 'axios';

const instance = axios.create({
  // api url
  baseURL: 'https://us-central1-e-commerce-scart.cloudfunctions.net/api'
  // baseURL: 'http://localhost:5001/e-commerce-scart/us-central1/api'

})


export default instance;