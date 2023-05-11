import axios from "axios";

export const RequestApiKenzieKars = axios.create({
  baseURL: "https://kenzie-kars-backend.onrender.com",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});
