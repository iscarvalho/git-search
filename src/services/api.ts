import axios from 'axios'

const baseURL = "https://api.github.com/"
const headers = {
    "Content-Type": "application/json"
}
export const apiCall = axios.create({
    baseURL,
    headers
})