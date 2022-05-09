import axios from "axios";

const api = axios.create({
    baseURL: 'https://fakestoreapi.com'
})

export const getItems = async () => {
    return await api.get('/products').then(res => res.data)
}

export const getItem = async (id) => {
    return await api.get(`/products/${id}`).then(res => res.data)
}