import axios from "axios";

const BASE_URL = 'https://ecomapi109.herokuapp.com/api/';
let Token = process.env.REACT_APP_Token;

export const publicReq = axios.create({
    baseURL: BASE_URL,  
})

export const userReq = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${Token}`},
})