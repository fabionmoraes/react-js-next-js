import axios from 'axios';

const apiWP = axios.create({
  baseURL: 'https://www.elaboredigital.com.br/wp-json/wp/v2',
});

export default apiWP;
