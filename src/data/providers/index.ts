import axios from "axios";

export const Api = axios.create({
    baseURL: `localhost:8080/api/v1/`,
    headers: {
        'Content-Type': 'application/json'
    }
})