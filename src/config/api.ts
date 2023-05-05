import axios from "axios";
export const TOKEN = "TOKEN"
export const BASE_URL = ""

export const http_no_auth = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: "application/json"
    }
})

export const http_auth = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: "application/json",
        ContentType: "application/json",
        Authorization: `Bearer ${localStorage.getItem(TOKEN)}`
    }
})
