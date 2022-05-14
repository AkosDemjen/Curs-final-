import axios from "axios";

export const instance = axios.create({
  baseURL: "https://imdb-api.com/en/API",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 30000, // 30 sec
});
