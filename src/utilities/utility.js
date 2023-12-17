import axios from "axios";

export default axios.create({
    baseURL: "https://newsapi.org/v2/top-headlines?country=us&apiKey=a9cd0a05f40f476d8bca878cdbac8330",
    responseType: "json",
    headers: {
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
      "Access-Control-Max-Age": "86400",
      'X-Api-Key' : 'a9cd0a05f40f476d8bca878cdbac8330'
    }
  });
