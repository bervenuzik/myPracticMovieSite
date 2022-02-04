import axios from "axios";
const instance = axios.create({
    baseURL: 'https://imdb-api.com/API/'
  });

export default instance