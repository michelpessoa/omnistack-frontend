import axios from 'axios';

const api = axios.create({
    baseURL: "https://omnistack-michel-backend.herokuapp.com",
});

export default api;