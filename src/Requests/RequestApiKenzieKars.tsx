import axios from "axios";

export const RequestApiKenzieKars = axios.create({
  // baseURL: "https://kenzie-kars-backend.onrender.com/",
  baseURL: "http://localhost:3000/",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});
