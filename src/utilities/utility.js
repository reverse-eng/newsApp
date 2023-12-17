import axios from "axios";

export default axios.create({
    baseURL: "https://northwind-demo.tenantreview.workers.dev/api/articles",
    responseType: "json"
  });
