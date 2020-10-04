import axios from 'axios';

const baseAxios = axios.create({
    baseURL: (process.env.RECIPE_SERVER_BASE_URL || 'http://localhost:4000/api/v1/'),
    timeout: 5000
});

export default baseAxios;
