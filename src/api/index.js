import axios from "axios";

const api = axios.create({
    baseURL: 'https://fakestoreapi.com'
})

export const ffetch = async () => {
    return await api.get('/products').then(res => res.data)
}