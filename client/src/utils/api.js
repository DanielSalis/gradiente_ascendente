import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.API || "http://localhost:3333",
  headers: {
    'Content-Type': 'application/json'
  }
})