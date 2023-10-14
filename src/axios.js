import axios from "axios";

// we can create any base url with this
export const makeRequest = axios.create({
    baseURL: "http://localhost:8800/api/",
    withCredentials: true,
})