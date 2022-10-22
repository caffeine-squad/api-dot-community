import axios from "axios";

export const baseUrl =  axios.create({
    baseURL: 'https://viacep.com.br/ws/',
    timeout: 15000
});