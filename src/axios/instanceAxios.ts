import axios from "axios";

const instance = axios.create({
  baseURL:  "http://localhost:5000",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST, PATCH, DELETE",
  },
});

export default instance;
