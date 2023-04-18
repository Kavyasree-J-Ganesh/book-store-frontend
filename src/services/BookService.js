import axios from "axios"

const headerConfig = {headers:{Authorization: `bearer ${localStorage.getItem("auth")}`}}

export const getBooks = async () => {
    const result = await axios.get("http://localhost:4000/api/v1/books", headerConfig)
    return result
}

export const getBook = async (id) => {
    const result = await axios.get(`http://localhost:4000/api/v1/books/${id}`, headerConfig)
    return result
}
