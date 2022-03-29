import axios from "axios";

const instance = axios.create({
  baseURL:  process.env.REACT_APP_ENV,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST, PATCH, DELETE",
  },
});

export default instance;
