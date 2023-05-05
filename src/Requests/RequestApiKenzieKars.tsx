import axios from "axios";

export const RequestApiKenzieKars = axios.create({
  baseURL: "http://localhost:3000/",
  // baseURL: "https://kenzie-kars-backend.onrender.com",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});
