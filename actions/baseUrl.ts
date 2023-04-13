import axios from "axios";

let url = "http://localhost:8001";

export const api = axios.create({
  baseURL: url,
});
