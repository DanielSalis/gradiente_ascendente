import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.API || "http://localhost:3333",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQwYTZiMzAyLTk0MzktNDg0MS1iZWZiLTFiNGM3MTk3YzhkZiIsIm5hbWUiOiJNaWxlbmEiLCJpYXQiOjE2OTI1NDE1MTd9.iTqLKEheeemh8HCgx_akmDECp79D8y-Qp5LDfCVIEro'
  }
})