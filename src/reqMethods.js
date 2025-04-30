import axios from "axios";

const BASE_URL = 'https://web-production-1424a.up.railway.app/';
let Token = process.env.REACT_APP_Token;

export const publicReq = axios.create({
    baseURL: BASE_URL,  
})

export const userReq = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${Token}`},
})
