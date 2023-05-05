import axios from "axios";

export const RequestApiFIPE = axios.create({
  baseURL: "https://kenzie-kars.herokuapp.com/",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});
