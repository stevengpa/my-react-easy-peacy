import axios from 'axios';

const starWarsInstance = axios.create({
  baseURL: 'https://swapi.dev/api',
  timeout: 1000,
});

export default starWarsInstance;
