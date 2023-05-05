import axios from "axios";

export const RequestApiKenzieKars = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});
