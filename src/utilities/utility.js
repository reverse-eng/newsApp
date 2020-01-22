import axios from "axios";

export default axios.create({
    baseURL: "https://newsapi.org/v2/top-headlines/",
    responseType: "json",
    headers: {'X-Api-Key' : 'a9cd0a05f40f476d8bca878cdbac8330'}
  });