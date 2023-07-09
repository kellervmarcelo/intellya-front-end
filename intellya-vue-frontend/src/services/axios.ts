import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'X-API-Key': '70335667-2408-4011-a994-ea3e7042d96f'
    }
})