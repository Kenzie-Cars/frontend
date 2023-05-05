import axios from "axios";

export const RequestApiKenzieKars = axios.create({
  baseURL: "http://localhost:3000/",
<<<<<<< HEAD
  timeout: 10000,
=======
  // baseURL: "https://kenzie-kars-backend.onrender.com",
  timeout: 5000,
>>>>>>> 43e3a879e8fdfa587fb924ef378b33256d24521f
  headers: { "Content-Type": "application/json" },
});
