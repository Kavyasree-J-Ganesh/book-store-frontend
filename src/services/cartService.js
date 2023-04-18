import axios from "axios"

const headerConfig = {headers:{Authorization: `bearer ${localStorage.getItem("auth")}`}}

export const getCart = async () => {
    const result = await axios.get("http://localhost:4000/api/v1/cart", headerConfig)
    return result
}

export const addToCart = async (id) => {
    const result = await axios.post(`http://localhost:4000/api/v1/cart/addbook/${id}`,{}, headerConfig)
    return result
}

export const removeFromCart = async (id) => {
    const result = await axios.post(`http://localhost:4000/api/v1/cart/removebook/${id}`,{}, headerConfig)
    return result
}