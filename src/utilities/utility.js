import axios from "axios";

export default axios.create({
    baseURL: "https://newsapi.org/v2/",
    responseType: "json",
    headers: {
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
      "Access-Control-Max-Age": "86400"
    }
  });
