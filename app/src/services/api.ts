import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Puxa a URL da variável de ambiente
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
